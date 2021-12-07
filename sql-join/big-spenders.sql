select "payments"."amount",
       "payments"."customerId",
       "customers"."firstName",
       "customers"."lastName"
from "payments"
join "customers" using ("customerId")
order by "amount" desc
limit 10;
