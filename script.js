$(function () {
  //what radio value did they select?

  $("#formSubmit").on("click", (e) => {
    //ii. Package the data
    
    e.preventDefault();
    
    
}
      
    );
  });

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    //myFunctionToLoadinStuffInThatPlaceForIndia(someData);

    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Anakin Skywalker">Anakin Skywalker</option>`)
        .append(`<option value="Luke Skywalker">Luke Skywalker</option>`)
        .append(`<option value="Leia Organa">Leia Organa</option>`)
        .append(`<option value="Darth Vader">Darth Vader</option>`)
        .append(`<option value="Emperor Palpatine">Emperor Palpatine</option>`)
        .append(`<option value="Chewbacca">Chewbacca</option>`)
        .append(`<option value="Han Solo">Han Solo</option>`)
        .append(`<option value="Jar jar Binks">JarJar Binks</option>`)
        .append(`<option value="Yoda">Yoda</option>`);
      
      
      
      
      
      
    } else if (radioChoice === "B") {
     

      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Captain America">Captain America</option>`)
        .append(`<option value="The Hulk">The Hulk</option>`)
        .append(`<option value="Dr. Strange">Dr. Strange</option>`)
      .append(`<option value="Iron Man">Iron Man</option>`)
        .append(`<option value="SpiderMan">SpiderMan</option>`)
        .append(`<option value="Hawkeye">Hawkeye</option>`)
      .append(`<option value="thanos">Thanos</option>`)
        .append(`<option value="Venom">Venom</option>`)
        .append(`<option value="Black Widow">Black Widow</option>`);
   
   

    
    } 

    
    else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">Pick a fandom</option>`);
    
  };
});