const DBConnect = require('../config/db');

class User {

  /**
   * Create an account
   * @param {object} data 
   * @param {callback} callbackToAdd 
   */
  static create(data, callbackToAdd) {
    const {
      pseudo,
      email,
      password,
      notifNewEvent,
      notifNewUpdate,
    } = data;

    const defaultUserRole = 1;

    const sqlQueryInsertUser = 'INSERT INTO user(pseudo, email, password, notif_new_event, notif_new_update) VALUE(?, ?, ?, ?, ?)';

    // Check if the role exist and get his id
    DBConnect.query(
      sqlQueryInsertUser, 
      [pseudo, email, password, notifNewEvent, notifNewUpdate],
      (errorInsertUser, resultInsertUser) => {

        if (errorInsertUser) {

          callbackToAdd({
            error: true,
            errorMessage: errorInsertUser,
          });
        } else {

          const sqlQueryInsertRelation = 'INSERT INTO possesses(user_id, role_id) VALUE(?, ?)';
          
          // Insert the new user
          DBConnect.query(
            sqlQueryInsertRelation, 
            [resultInsertUser.insertId, defaultUserRole],
            (errorInsertRelation, resultInsertRelation) => {
              if (errorInsertRelation) {

                callbackToAdd({
                  error: true,
                  errorMessage: errorInsertRelation,
                });
              } else {

                callbackToAdd({
                  error: false,
                  successMessage: 'L\'inscription cest bien déroulé, vous pouvez désormais vous connecter.',
                  data: {
                    newId: resultInsertUser.insertId,
                  },
                });
              }
      
            }
          );
        }
      }
    );
  }

  /**
   * Check if have user with same email
   * @param {string} email 
   * @param {callback} callbackCheckEmail 
   */
  static checkUserByEmail(email, callbackCheckEmail) {
    const sqlQuery = 'SELECT * FROM user WHERE email = ?';

    DBConnect.query(
      sqlQuery, 
      [email], 
      (error, result) => {

      if (error) {
        callbackCheckEmail({
          error: true,
          errorMessage: error,
        });
      } else {
        
        callbackCheckEmail({
          error: false,
          errorMessage: null,
          rowMatch: result.length > 0,
          data: result[0],
        });
      }
    });
  }

  /**
   * Find specific User
   * @param {integer} id
   * @param {callback} callbackGetUser
   */
  static find(id, callbackGetUser) {
    const sqlQueryUserWithRole = 'SELECT user.id, user.pseudo, user.email, user.lastname, user.firstname, user.url_avatar, user.notif_new_event, user.notif_new_update, user.created_at, role.name AS role FROM user LEFT JOIN possesses ON possesses.user_id = user.id LEFT JOIN role ON role.id = possesses.role_id WHERE user.id = ?';

    // Take user with his role
    DBConnect.query(
      sqlQueryUserWithRole,
      id,
      (errorUserWithRole, resultUserWithRole) => {
        if (errorUserWithRole) {
          callbackGetUser({
            error: true,
            errorMessage: errorUserWithRole,
          });
        } else {

          // Check if the user exist
          if (resultUserWithRole.length > 0) {
            const sqlQueryWatcheEvents = 'SELECT event.* FROM event LEFT JOIN watches ON watches.event_id = event.id WHERE watches.user_id = ?';

            // Take events at which the user was interested
            DBConnect.query(
              sqlQueryWatcheEvents,
              id,
              (errorWatcheEvents, resultWatcheEvents) => {
                if (errorWatcheEvents) {
                  callbackGetUser({
                    error: true,
                    errorMessage: errorWatcheEvents,
                  });
                } else {

                  const sqlQueryLikeEvents = 'SELECT event.* FROM event LEFT JOIN likes ON likes.event_id = event.id WHERE likes.user_id = ?';

                  // Take events that the user like
                  DBConnect.query(
                    sqlQueryLikeEvents,
                    id,
                    (errorLikeEvents, resultLikeEvents) => {

                      if (errorLikeEvents) {
                        callbackGetUser({
                          error: true,
                          errorMessage: errorLikeEvents,
                        });
                      } else {

                        const sqlQueryParticipationEvents = 'SELECT event.* FROM event LEFT JOIN participates ON participates.event_id = event.id WHERE participates.user_id = ?';
                        
                        // Take events to which the user participates
                        DBConnect.query(
                          sqlQueryParticipationEvents,
                          id,
                          (errorParticipationEvents, resultParticipationEvents) => {
                            if (errorParticipationEvents) {
                              callbackGetUser({
                                error: true,
                                errorMessage: errorParticipationEvents,
                              });
                            } else {
                              callbackGetUser({
                                error: false,
                                errorMessage: null,
                                rowMatch: resultUserWithRole.length > 0,
                                data: {
                                  ...resultUserWithRole[0],
                                  events_likes: resultLikeEvents,
                                  events_interest: resultWatcheEvents,
                                  events_participates: resultParticipationEvents,
                                },
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );

          } else {
            callbackGetUser({
              error: false,
              errorMessage: null,
              rowMatch: result.length > 0,
              data: result[0],
            });
          }
        }
      }
    );
  }

  /**
   * Delete specific User
   * @param {integer} id
   * @param {callback} callbackDeleteAccount
   */
  static delete(id, callbackDeleteAccount) {
    const sqlQueryDeleteRelationPossesses = 'DELETE FROM possesses WHERE user_id = ?';

    DBConnect.query(
      sqlQueryDeleteRelationPossesses,
      id,
      (errorDeleteRelationPossesses, resultDeleteRelationPossesses) => {
        if (errorDeleteRelationPossesses) {
          callbackDeleteAccount({
            error: true,
            errorMessage: errorDeleteRelationPossesses,
          });
        } else {
        
          const sqlQueryDeleteRelationWatches = 'DELETE FROM watches WHERE user_id = ?';

          DBConnect.query(
            sqlQueryDeleteRelationWatches,
            id,
            (errorDeleteRelationWatches, resultDeleteRelationWatches) => {
              if (errorDeleteRelationWatches) {
                callbackDeleteAccount({
                  error: true,
                  errorMessage: errorDeleteRelationWatches,
                });
              } else {

                const sqlQueryDeleteRelationLikes = 'DELETE FROM likes WHERE user_id = ?';

                DBConnect.query(
                  sqlQueryDeleteRelationLikes,
                  id,
                  (errorDeleteRelationLikes, resultDeleteRelationLikes) => {
                    if (errorDeleteRelationWatches) {
                      callbackDeleteAccount({
                        error: true,
                        errorMessage: errorDeleteRelationLikes,
                      });
                    } else {

                      const sqlQueryDeleteUser = 'DELETE FROM user WHERE id = ?';

                      DBConnect.query(
                        sqlQueryDeleteUser,
                        id,
                        (errorDeleteUser, resultDeleteUser) => {
                          if (errorDeleteUser) {
                            callbackDeleteAccount({
                              error: true,
                              errorMessage: errorDeleteUser,
                            });
                          } else {
                          
                            callbackDeleteAccount({
                              error: false,
                              errorMessage: null,
                              rowMatch: resultDeleteUser.affectedRows > 0,
                            });
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }

  /**
   * Update an account
   * @param {object} data
   * @param {integer} id 
   * @param {boolean} editPassword 
   * @param {callback} callbackToUpdate
   */
  static update(data, id, editPassword, callbackToUpdate) {
    const {
      firstname,
      lastname,
      pseudo,
      email,
      password,
      notifNewEvent,
      notifNewUpdate,
    } = data;

    let dataUpdate = [firstname, lastname, pseudo, email, notifNewEvent, notifNewUpdate, id];
    let sqlQueryUpdateUser = 'UPDATE user SET firstname = ?, lastname = ?, pseudo = ?, email = ?, notif_new_event = ?, notif_new_update = ?, updated_at = NOW() WHERE id = ?';

    if (editPassword) {

      dataUpdate = [firstname, lastname, pseudo, email, password, notifNewEvent, notifNewUpdate, id];
      sqlQueryUpdateUser = 'UPDATE user SET firstname = ?, lastname = ?, pseudo = ?, email = ?, password = ?, notif_new_event = ?, notif_new_update = ?, updated_at = NOW() WHERE id = ?';
    }

    // Check if the role exist and get his id
    DBConnect.query(
      sqlQueryUpdateUser,
      dataUpdate,
      (errorUpdateUser, resultUpdateUser) => {

        if (errorUpdateUser) {

          callbackToUpdate({
            error: true,
            errorMessage: errorUpdateUser,
          });
        } else {

          callbackToUpdate({
            error: false,
            errorMessage: null,
            data: resultUpdateUser,
          });
        }
      }
    );
  }

  /**
   * User adds a like to the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToAddLikeToEvent
   */
  static addLikeToEvent(userId, eventId, callbackToAddLikeToEvent) {
    const sqlQueryCheckAlreadyExist = 'SELECT * FROM likes WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryCheckAlreadyExist,
      [userId, eventId],
      (errorCheckAlreadyExist, resultCheckAlreadyExist) => {

        if (errorCheckAlreadyExist) {
          callbackToAddLikeToEvent({
            error: true,
            errorMessage: errorCheckAlreadyExist,
          })
        } else {

          if (resultCheckAlreadyExist.length < 1) {

            const sqlQueryInsertRelation = 'INSERT INTO likes(user_id, event_id) VALUES(?, ?)';

            DBConnect.query(
              sqlQueryInsertRelation,
              [userId, eventId],
              (errorInsertRelation, resultInsertRelation) => {

                if (errorInsertRelation) {
                  callbackToAddLikeToEvent({
                    error: true,
                    errorMessage: errorInsertRelation,
                  });
                } else {
                  callbackToAddLikeToEvent({
                    error: false,
                    successMessage: 'Action effectué',
                  });
                }
              });
          } else {

            callbackToAddLikeToEvent({
              error: true,
              errorMessage: 'Already likes',
            });
          }
        }
      });
  }

  /**
   * User delete a like to the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToDeleteLikeToEvent
   */
  static deleteLikeToEvent(userId, eventId, callbackToDeleteLikeToEvent) {
    const sqlQueryDeleteRelation = 'DELETE FROM likes WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryDeleteRelation,
      [userId, eventId],
      (errorDeleteRelation, resultDeleteRelation) => {

        if (errorDeleteRelation) {
          callbackToDeleteLikeToEvent({
            error: true,
            errorMessage: errorDeleteRelation,
          });
        } else {
          callbackToDeleteLikeToEvent({
            error: false,
            successMessage: 'Action effectué',
          });
        }
      });
          
  }

  /**
   * User adds his interest for the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToAddInterestToEvent
   */
  static addInterestToEvent(userId, eventId, callbackToAddInterestToEvent) {
    const sqlQueryCheckAlreadyExist = 'SELECT * FROM watches WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryCheckAlreadyExist,
      [userId, eventId],
      (errorCheckAlreadyExist, resultCheckAlreadyExist) => {

        if (errorCheckAlreadyExist) {
          callbackToAddInterestToEvent({
            error: true,
            errorMessage: errorCheckAlreadyExist,
          })
        } else {
          
          if (resultCheckAlreadyExist.length < 1) {

            const sqlQueryInsertRelation = 'INSERT INTO watches(user_id, event_id) VALUES(?, ?)';

            DBConnect.query(
              sqlQueryInsertRelation,
              [userId, eventId],
              (errorInsertRelation, resultInsertRelation) => {

                if (errorInsertRelation) {
                  callbackToAddInterestToEvent({
                    error: true,
                    errorMessage: errorInsertRelation,
                  });
                } else {
                  callbackToAddInterestToEvent({
                    error: false,
                    successMessage: 'Action effectué',
                  });
                }
              });
          } else {

            callbackToAddInterestToEvent({
              error: true,
              errorMessage: 'Already interesed',
            });
          }
        }
      });
  }

  /**
   * User delete a like to the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToDeleteInterestToEvent
   */
  static deleteInterestToEvent(userId, eventId, callbackToDeleteInterestToEvent) {
    const sqlQueryDeleteRelation = 'DELETE FROM watches WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryDeleteRelation,
      [userId, eventId],
      (errorDeleteRelation, resultDeleteRelation) => {

        if (errorDeleteRelation) {
          callbackToDeleteInterestToEvent({
            error: true,
            errorMessage: errorDeleteRelation,
          });
        } else {
          callbackToDeleteInterestToEvent({
            error: false,
            successMessage: 'Action effectué',
          });
        }
      });
  }

  /**
   * User adds his participation to the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToAddParticipationToEvent
   */
  static addParticipationToEvent(userId, eventId, callbackToAddParticipationToEvent) {
    const sqlQueryCheckAlreadyExist = 'SELECT * FROM participates WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryCheckAlreadyExist,
      [userId, eventId],
      (errorCheckAlreadyExist, resultCheckAlreadyExist) => {

        if (errorCheckAlreadyExist) {
          callbackToAddParticipationToEvent({
            error: true,
            errorMessage: errorCheckAlreadyExist,
          })
        } else {
          
          if (resultCheckAlreadyExist.length < 1) {

            const sqlQueryInsertRelation = 'INSERT INTO participates(user_id, event_id) VALUES(?, ?)';

            DBConnect.query(
              sqlQueryInsertRelation,
              [userId, eventId],
              (errorInsertRelation, resultInsertRelation) => {

                if (errorInsertRelation) {
                  callbackToAddParticipationToEvent({
                    error: true,
                    errorMessage: errorInsertRelation,
                  });
                } else {
                  callbackToAddParticipationToEvent({
                    error: false,
                    successMessage: 'Action effectué',
                  });
                }
              });
          } else {

            callbackToAddParticipationToEvent({
              error: true,
              errorMessage: 'Already participate',
            });
          }
        }
      });
  }

  /**
   * User delete his participation to the event
   * @param {integer} userId 
   * @param {integer} eventId 
   * @param {callback} callbackToDeleteInterestToEvent
   */
  static deleteParticipationToEvent(userId, eventId, callbackToDeleteParticipationToEvent) {
    const sqlQueryDeleteRelation = 'DELETE FROM participates WHERE user_id = ? AND event_id = ?';

    DBConnect.query(
      sqlQueryDeleteRelation,
      [userId, eventId],
      (errorDeleteRelation, resultDeleteRelation) => {

        if (errorDeleteRelation) {
          callbackToDeleteParticipationToEvent({
            error: true,
            errorMessage: errorDeleteRelation,
          });
        } else {
          callbackToDeleteParticipationToEvent({
            error: false,
            successMessage: 'Action effectué',
          });
        }
      });
  }
};

module.exports = User;
