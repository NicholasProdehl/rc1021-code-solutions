select "genres"."name", count("genres".*)
from "actors"
join "castMembers" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres"."name";
