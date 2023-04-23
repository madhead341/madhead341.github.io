lanyard({
    userId: "1083368117230653460",
}).then((response) => {
    document.getElementsByClassName("lanyard-profile-picture")[0].src = `https://cdn.discordapp.com/avatars/${response.discord_user.id}/${response.discord_user.avatar}.png`;
    var original_lanyard_username = document.getElementsByClassName("lanyard-username")[0].innerHTML;
    document.getElementsByClassName("lanyard-username")[0].innerHTML = `${response.discord_user.username}#${response.discord_user.discriminator} ${original_lanyard_username}`;
    //try {
    //    console.log(response.activities)
    //    if(response.activities[1]) {
    //        document.getElementsByClassName("lanyard-activity")[0].innerHTML = `${response.activities[0].state} - ${response.activities[0].details}`;
    //        document.getElementsByClassName("lanyard-activity")[0].style.color = "#00ff00";
    //    } else {
    //        console.log(response.activities)
    //        console.log(response.activities[1].state)
    //        console.log(response.activities[1].details)
    //        document.getElementsByClassName("lanyard-activity")[0].innerHTML = `${response.activities[1].state} - ${response.activities[1].details}`;
    //        document.getElementsByClassName("lanyard-activity")[0].style.color = "#00ff00";
    //    }
    //} catch {
    //    document.getElementsByClassName("lanyard-activity")[0].innerHTML = "Offline - Come back later";
    //    document.getElementsByClassName("lanyard-activity")[0].style.color = "red";
    //}
    // //check if im on vscode (usually am) and change icon with vscode one for project im working on
    //if(response.activities[1]) {
    //    if(response.activities[1].name == "Code") {
    //        var vscode = response.activities[1].assets.large_image;
    //        //idk why this happens ngl
    //        vscode = vscode.slice(56).replace("https/", "https://");
    //        document.getElementsByClassName("status")[0].src = `${vscode}`;
    //        document.getElementsByClassName("status")[0].style.display = "flex";
    //    } else {
    //        document.getElementsByClassName("status")[0].src = ``;
    //    }
    //}
    console.log(response.activities)
    document.getElementsByClassName("lanyard-activity")[0].innerHTML = "Offline - Come back later";
    document.getElementsByClassName("lanyard-activity")[0].style.color = "red";
    for (var i = 0; i < response.activities.length; i++) {
        console.log(response.activities[i].name)
        if (!(response.activities[i].name == "Custom Status")) {
            if (response.activities[i].state == null) {
                document.getElementsByClassName("lanyard-activity")[0].innerHTML = `Playing ${response.activities[i].name}`;
                document.getElementsByClassName("lanyard-activity")[0].style.color = "#00ff00";
                break
            } else {
                document.getElementsByClassName("lanyard-activity")[0].innerHTML = `${response.activities[i].state} - ${response.activities[i].details}`;
                document.getElementsByClassName("lanyard-activity")[0].style.color = "#00ff00";
                break
            }
        }
    }
    for (var i = 0; i < response.activities.length; i++) {
        if (response.activities[i].name == "Code") {
            var vscode = response.activities[i].assets.large_image;
            vscode = vscode.slice(56).replace("https/", "https://");
            document.getElementsByClassName("status")[0].src = `${vscode}`;
            document.getElementsByClassName("status")[0].style.display = "flex";
            document.getElementsByClassName("lanyard-activity")[0].innerHTML = `${response.activities[i].state} - ${response.activities[i].details}`;
            document.getElementsByClassName("lanyard-activity")[0].style.color = "#00ff00";
            break
        } else {
            document.getElementsByClassName("status")[0].src = ``;
        }
    }
});