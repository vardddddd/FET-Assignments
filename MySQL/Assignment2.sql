create table items(I_code int primary key,name varchar(50),category varchar(50),rate int);
create table bills(billno int,Datee date,I_code int,qty int);

insert into items values(1001," Masala Dosa","South Indian",60);
insert into items values(1002,"Vada Sambhar ","South Indian",40);
insert into items values(1003,"Idli Sambhar","South Indian",40);
insert into items values(2001,"Chow Mein","Chinese",80);
insert into items values(2002," Dimsum","Chinese",60);
insert into items values(2003,"Soup","Chinese",50);
insert into items values(3001,"Pizza"," Italian",240);
insert into items values(3002,"Pasta"," Italian",125);

insert into bills values(1," 2010-04-01",1002,2);
insert into bills values(1," 2010-04-01",3001,1);
insert into bills values(2," 2010-04-01",1001,3);
insert into bills values(2," 2010-04-01",1002,1);
insert into bills values(2," 2010-04-01",2003,2);
insert into bills values(3,"2010-04-02",2002,1);
insert into bills values(4,"2010-04-02",2002,4);
insert into bills values(4,"2010-04-02",2003,2);
insert into bills values(5,"2010-04-03",2003,2);
insert into bills values(5,"2010-04-03",3001,1);
insert into bills values(5,"2010-04-03",3002,3);

/*Queries*/
select avg(rate) from items where category="South Indian";
 select category,count(name) from items group by category;
 select I_code,sum(qty) from bills group by I_code;
 select I_code,sum(qty) from bills group by I_code having sum(qty)>=3;
 select billno,datee,bills.I_code,name,qty from items,bills where items.I_code=bills.I_code;
  select billno,datee,bills.I_code,qty from items,bills where items.I_code=bills.I_code and name like '%Dosa';
  select billno,Datee,bills.I_code,qty from items,bills where items.I_code=bills.I_code and category='Italian' group by I_code;
   select billno,sum(qty) from bills group by billno;
   