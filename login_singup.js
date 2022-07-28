console.log("**WELCOME IN LOGIN AND SIGNUP PAGE**")
function signup(password){
    if(password.length>=6 && password.length<=16){
        if(password>="a" || password<="z" || password>="A" || password<="Z" ){
            if(password.includes("@") || password.includes("#")){
                console.log("strong")
            }else{
                console.log("Add spacial charater")
                const confirm_password=require("readline-sync");
                var password=confirm_password.question("Enter your passward again: ");
                // signup(password)

            }
        }else{
            console.log("Add alphabets")
            const rs=require("readline-sync");
            var password=rs.question("Enter your passward again: ");
            signup(password)
        }
    }else{
        console.log("please check the lenght of passward, atleast 6 and maximum 16.")
        const mp=require("readline-sync");
        var password=mp.question("Enter your passward again: ");
        signup(password)
    }
}
function confirm_password(password,con_password){
    if(password==con_password){
        console.log("correct")
    }else{
        console.log("your confirm passward is not match with passward.")
        const mp=require("readline-sync");
        var con_password=mp.question("Enter your confirm passward: ");
    }
}

const mp=require("readline-sync");
var user=mp.question("What do you want singup so press 1 or you want login so press 2: ");
const fs=require("fs");
var file=fs.existsSync("login signup.json");
if(file==false){
    if(user=="1"){
        var name=mp.question("Enter your Full name: ");
        var password=mp.question("Enter your strong password: ");
        signup(password)
        var con_password=mp.question("Enter your Confirm password: ");
        console.log(password,con_password)
        console.log(`congrates ${name} you signed-up successfully!`)
        var dob=mp.question("Enter your Date of birth: ");
        var gender=mp.question("Enter your Gender: ");
        var Bio=mp.question("Enter your Bio: ");
        var final_list=[],dict={};
        var list1=["Name","Password","D.O.B","Gender","Bio"];
        var list2=[name,password,dob,gender,Bio];
        for (let i in list1){
            dict[list1[i]]=list2[i]
        }
        final_list.push(dict)
        fs.writeFileSync("login signup.json",JSON.stringify(final_list,null,4))
    }
}else if(file==true){
    if(user=="1"){
        var name=mp.question("Enter your Full name: ");
        var password=mp.question("Enter your strong password: ");
        signup(password)
        var con_password=mp.question("Enter your Confirm password: ");
        console.log(password,con_password)
        var data=fs.readFileSync("login signup.json");
        if (data.includes(name)){
            console.log("name is already exist!")
        }else{
            console.log(`congrates ${name} you signed-up successfully!`)
            var dob=mp.question("Enter your Date of birth: ");
            var gender=mp.question("Enter your Gender: ");
            var Bio=mp.question("Enter your Bio: ");
            var final_list=[],dict={};
            var list1=["Name","Password","Date of birth","Gender","Bio"];
            var list2=[name,password,dob,gender,Bio];
            var list1=["Name","Password","Date of birth","Gender","Bio"];
            var list2=[name,password,dob,gender,Bio];
            var dict1={};
            for (let i in list1){
                dict1[list1[i]]=list2[i]
            }
            var data=fs.readFileSync("login signup.json")
            var data=JSON.parse(data)
            data.push(dict1)
            fs.writeFileSync("login signup.json",JSON.stringify(data,null,4))
        }
    }else if(user=="2"){
        var user_name=mp.question("Enter your name: ");
        var user_password=mp.question("Enter your password: ");
        var data=fs.readFileSync("login signup.json");
        var data=JSON.parse(data);
        for (let i in data){
            if(user_name==data[i]["Name"]){
                if(user_password==data[i]["Password"]){
                    console.log("Login successfuly !")
                    console.log("Your name is ",data[i][Name])
                    console.log("Your Full informations are given below:- ")
                    for (let j in data[i]){
                        console.log(`${j}=${data[i][j]}`)
                    }
                } else {
                    console.log("Sorry this name is not exist in file")
                    break
                }

            }
            
        }
    }
}