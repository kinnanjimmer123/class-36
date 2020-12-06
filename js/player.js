class Player{
constructor(){


}
getCount(){//to get the player count from database
var playerCountRef=database.ref("playerCount");
playerCountRef.on("value",function(data){
    playerCount=data.val();

})

}

updateCount(count){//update the playerCount in the database
    database.ref("/").update({
        playerCount:count
    })
}
update(name){// update playername in the database
    var playerIndex="player"+playerCount;
    database.ref(playerIndex).set({
        name:name
    })
}
}