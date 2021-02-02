create table vehicle(RegNo char(10) primary key,RegDate date,Owner varchar(30),Address varchar(50));
create table offence(Offence_Code int(3) primary key,Off_Desc varchar(30),Challen_Amt int(4));
create table challan(Challan_No int(11) primary key,Ch_Date date,RegNo char(10),Offence_Code int(3),foreign key(RegNo) references vehicle(RegNo),foreign key(Offence_Code) references offence(Offence_code));

select min(RegDate) as "First",max(RegDate) as "Last" from vehicle;
select ch_date,count(challan_no) from challan group by ch_date;
select offence_code,count(challan_no) from challan group by offence_code;
select count(RegNo) from vehicle where RegNo like '_ _6C%';
select count(challan_No) from challan where offence_code=(select offence_code from offence where off_desc='Driving without License');
select Challan_No,Ch_date,RegNo,challan.Offence_code,Offence_Desc from challan,offence where challan.Offence_code=offence.offence_code and ch_date='2010-04-03';
select RegNo, count(Challan_No)from challan  group by RegNo having count(Challan_No)>1;
select * from vehicle,challan,offence where vehicle.RegNo=challan.RegNo and challan.Offence_code=offence.offence_code;
  