{
  const movie = "Deadpool";

  type movieType = typeof movie;
  //  It will return "Deadpool" as a type not as a string So we can not use it as a type unless our value is "Deadpool"

  const banglaMovie = {
    title: "Banglar King Kong",
    director: "Dipjol",
    releaseYear: 2008,
  };

  type BanglaMovieType = typeof banglaMovie;
  //  It will return { title: string, director: string, releaseYear: number } as a type not as a object So we can not use

  const ShakibsMovie: BanglaMovieType = {
    title: "No One Khan",
    director: "I don't know",
    releaseYear: 2012,
  };
  console.log(ShakibsMovie);

  type virus = {
    message: "Attacked by virus";
    danger: "Low" | "Medium" | "High";
  };

  const trojan : virus ={
    message: "Attacked by virus",
    danger: "High",
  }
  function antiVirus(input: number | string | virus) {
    if (typeof input === "string") {
      return `Computer is safe`;
    } else if (typeof input === "number") {
      return `Error: ${input}`;
    } else if ("message" in input && "danger" in input) {
      return `Your computer is ${input.message} and it in in ${input.danger} risk`;
    }
  }

  const test = antiVirus(trojan);
  console.log(test);
}
