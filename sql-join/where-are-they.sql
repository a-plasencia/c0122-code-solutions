select "line1",
       "district",
       "cities"."name" as "city"
  from "addresses"
  join "customers" using ("addressId")
  join "cities" using ("cityId")
