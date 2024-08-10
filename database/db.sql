use facultades;
create table faculties
(
    id          int primary key auto_increment,
    name        varchar(100) not null,
    description text,
    path_img    VARCHAR(255)
);
drop table faculties;
select * from faculties;