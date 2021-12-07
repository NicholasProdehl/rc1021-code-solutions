select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "totalPaid"
from "customers"
join "rentals" using ("customerId")
join "payments" using ("rentalId")
group by "customers"."customerId"
order by "totalPaid" desc;
