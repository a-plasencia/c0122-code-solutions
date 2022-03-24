select "countries"."name" as "Countries",
       count("cities") as "cities in country"
  from "countries"
  join "cities" using ("countryId")
 group by "Countries";
