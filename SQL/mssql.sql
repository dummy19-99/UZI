select * from 고객
where 재구매 > 0;

select * from 자동차
where 차종 in ('RV', '승용');
/* 차종 = 'RV' or '승용' */

select * from 자동차
where 소유자 is null;