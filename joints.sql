select distinct *from emp e inner join empsalary s on e.empid=s.empid where s.ispermanent="Yes"; 
select a.empname as empname,b.empname as head from emp a,emp b where a.empheadid=b.empid order by a.empname;
