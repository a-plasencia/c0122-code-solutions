update "actors"
   set "firstName" = 'Baby',
       "lastName" =  'Yoda'
 where "actorId" = 15
 returning *;

-- update "products"
--    set "price = 200",
--   where "productId" = 24;
