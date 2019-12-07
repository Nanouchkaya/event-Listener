## Rôle (role)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| name | varchar(50) | not null |
| created_at | timestamp | default(current_timestamp), not null |
| updated_at | timestamp | null |
 
 
## (possesses)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| user_id | int(11) | FOREIGN_KEY, not null, unsigned |
| role_id | int(11) | FOREIGN_KEY, not null, unsigned |
 
 
## Utilisateur (user)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| pseudo | varchar(50) | not null |
| firstname | varchar(50) | null |
| lastname | varchar(50) | null |
| url_avatar | varchar(255) | null |
| email | varchar(200) | not null |
| password | varchar(255) | not null |
| notif_new_event | tinyint(1) |  not null, default(0) |
| notif_new_update | tinyint(1) |  not null, default(0) |
| created_at | timestamp | default(current_timestamp), not null |
| updated_at | timestamp | null |
 
 
## (participates)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| user_id | int(11) | FOREIGN_KEY, not null, unsigned |
| event_id | int(11) | FOREIGN_KEY, not null, unsigned |
 
 
 
## (watches)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| user_id | int(11) | FOREIGN_KEY, not null, unsigned |
| event_id | int(11) | FOREIGN_KEY, not null, unsigned |
 
## Événement (event)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| title | varchar(255) | not null |
| url_image | varchar(255) | null |
| price | tinyint(1) | not null |
| description | TEXT | not null |
| address | varchar(255) | null |
| is_online | tinyint(1) | not null, default(0) |
| url_live | varchar(255) | null |
| date_start | datetime | not null |
| date_end | datetime | not null |
| latitude | double | null, default(null) |
| longitude | double | null, default(null) |
| created_at | timestamp | default(current_timestamp), not null |
| updated_at | timestamp | null |
| status_id | int(11) | FOREIGN_KEY, not null, unsigned |
 
 
## (has)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| event_id | int(11) | FOREIGN_KEY, not null, unsigned |
| tag_id | int(11) | FOREIGN_KEY, not null, unsigned |
 
 
## Tag (tag)
 
| Nom | Type | Spécificité |
| -- | -- | -- |
| ID | int(11) | PRIMARY_KEY, AUTO_INCREMENT, not null, unsigned |
| name | varchar(50) | not null |
| created_at | timestamp | default(current_timestamp), not null |
| updated_at | timestamp | null |
