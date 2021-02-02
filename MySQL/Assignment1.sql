use assign_db;
create table student(admNo int primary key,name varchar(30),class int,sec varchar(10),Rno int,address varchar(50),phoneno int);
create table sport(admNo int,game varchar(50),coachName varchar(50),grade varchar(10));

insert into student values(1271,"Utkarsh Madaan",12,"C",1,"C-32,Punjabi Bagh",4356154);
insert into student values(1324,"Naresh Sharma",10,"A",1,"31,Mohan Nagar",435654);
insert into student values(1325,"Md.Yusuf",10,"A",2," 12/21,Chand Nagar ",145654);
insert into student values(1328,"Sumedha",10,"B",23,"59,Moti Nagar", 4135654);
insert into student values(1364,"Subya Akhtar",11,"B",13,"12,Janak Puri", NULL );
insert into student values(1434,"Varuna",12,"B",21,"69,Rohini",NULL);
insert into student values(1461,"David DSouza",11,"B",1,"D-34,Model Town",243554);
insert into student values(2324,"Satinder Singh",12,"C",1,"1/2,Gulmohar Park",143654);
insert into student values(2328,"Peter Jones",10,"A",18,"21/32B,Vishal Enclave",24356154);
insert into student values(2371,"Mohini Mehta",11,"C",12,"37,Raja Garden",435654);


insert into sport values(1324,"Cricket","Narendra","A");
insert into sport values(1364,"Volleball","M.P.Singh","A");
insert into sport values(1271,"Volleball","M.P.Singh","B");
insert into sport values(1434,"Basket Ball","I.Malhotra","B");
insert into sport values(1461,"Cricket","Narendra","B");
insert into sport values(2328,"Basket Ball","I.Malhotra","A");
insert into sport values(2371,"Basket Ball","I.Malhotra","A");
insert into sport values(1325,"Basket Ball","I.Malhotra","A");
insert into sport values(1434,"Cricket","Narendra","A");
insert into sport values(1364,"Basket Ball","I.Malhotra","B");


/*queries*/
select max(class) as "highest", min(class) as "lowest" from student;
select class,count(class) as "No.of Students" from student group by class;
 select count(class) from student where class =10;
select student.* from student,sport where student.admNo=sport.admNo and game='Cricket';
select student.* from student join sport using(admNo) where game='Cricket';
 select student.admNo,name,class,sec,Rno from student join sport using(admNo) where grade='A';
 select name,phoneno from student join sport using(admNo) where class=12 and game is not null;
 select coachName,count(admNo) from sport group by coachName;
 select name,phoneno from student join sport using(admNo) where grade='A'and coachName='Narendra';
 SELECT class, sec, count(*) FROM student GROUP BY class, sec;
 SELECT game, COUNT(*) FROM Sport GROUP BY game;
 SELECT game, name, address FROM student, Sport WHERE student.admNo = sport.admNo AND grade = 'A';
 SELECT game FROM student, Sport WHERE student.admNo = sport.admNo AND Student.AdmNo = 1434;