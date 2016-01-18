--/** ----- USERS ----- **/
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    first_name varchar(80),
    last_name varchar(80),
    grade_level integer,
    email varchar(80),
    password varchar(80),
    created_at timestamp,
    updated_at timestamp
    );

--/** ----- LESSONS ----- **/

DROP TABLE IF EXISTS lessons CASCADE;

CREATE TABLE lessons (
    lesson_id serial PRIMARY KEY,
    lesson_name varchar(80),
    lesson_unit varchar(80),
    lesson_number integer,
    lesson_subject varchar(80),
    materials_required varchar(80),
    lesson_description varchar(1000),
    user_id int REFERENCES users,
    created_at timestamp,
    updated_at timestamp
    );

--/** ----- USERS-LESSONS ----- **/
--/* Helps form the many-to-many relationship between users and lessons
-- * References the users table and lessons table
-- */

DROP TABLE IF EXISTS users_lessons CASCADE;

CREATE TABLE users_lessons (
    user_id int REFERENCES users,
    lesson_id int REFERENCES lessons,
    PRIMARY KEY(user_id, lesson_id),
    created_at timestamp,
    updated_at timestamp
    );

--/** ----- LESSON PLANS ----- **/
--/* Foreign key restrain maintains 1-to-many relationship between
-- * lesson plan and lessons.
-- */

DROP TABLE IF EXISTS lesson_plans CASCADE;

CREATE TABLE lesson_plans (
    plan_id serial PRIMARY KEY,
    day_template varchar(2),
    plan_date date,
    lesson_id int REFERENCES lessons,
    created_at timestamp,
    updated_at timestamp
    );

--SELECT users.email, users.password_digest, lessons.lesson_name FROM users
--  JOIN users_lessons ON users.user_id = users_lessons.user_id
--  JOIN lessons ON users_lessons.lesson_id = lessons.lesson_id;
--
--  email | password_digest | lesson_name
--  ------+-----------------+------------