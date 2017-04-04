import React, { Component } from 'react';
import {
  AppRegistry,Clipboard ,
  StyleSheet,TouchableOpacity,
  Text,Image,ScrollView,AsyncStorage,
  View,Dimensions,ToastAndroid 
} from 'react-native';
var randomColor=require('randomcolor')
var {height, width} = Dimensions.get('window');
const colors=["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
export default class textables extends Component {
  constructor(props){
    super(props)
    this.state={fav:[]}
    AsyncStorage.getItem("fav").then(favs=>{
        if(favs){
          this.state.fav=JSON.parse(favs);
          this.setState(this.state);
        }
      })
  }
  render() {
    return (
      <View style={{height:height,width:width,backgroundColor:'black'}}>
          <Text style={{color:'white',fontFamily:'sans-serif-thin',fontSize:16,textAlign:'center',padding:5}}>{'↓ Scroll & Tap ↓'}</Text>
        <ScrollView>
          {content.map(function(data,i){
            return(
              <View key={data.category}>
              <View style={{height:30,marginRight:10,marginLeft:10,backgroundColor:'transparent',paddingLeft:20,justifyContent:'center'}}>
                <Text style={{color:'yellow',fontFamily:'Roboto',fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>{data.category}</Text>
              </View>
              <View style={{width,padding:10,flexWrap: 'wrap',flex:1,flexDirection:'row'}}>
               {data.items.map(function(item){
                return(
                  <View key={item.name} style={{padding:10,height:140,width:(item.art.length>10)?width-25:width/2-15,marginBottom:5,marginRight:5,backgroundColor:randomColor({luminosity: 'light'}),justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:10,width:10,backgroundColor:'yellow',position:'absolute',top:0,right:0}}>
                      <Image source={require('./assets/star-icon.png')}/>
                    </View>
                  <TouchableOpacity 
                    delayLongPress={500} 
                    onLongPress ={(e)=>{AsyncStorage.setItem('fav', this.state.fav.push(item))}} 
                    onPress={(e)=>{Clipboard.setString(item.art);ToastAndroid.show('Copied '+item.name, ToastAndroid.SHORT)}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={{color:'black',fontFamily:'sans-serif-condensed',fontSize:20,fontWeight:'bold'}}>{item.art}</Text>
                      <Text style={{color:'rgba(0,0,0,0.5)',fontFamily:'sans-serif-thin',fontSize:15,fontWeight:'100'}}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                  </View>)
              })}
                </View>
              </View>);
          })}
          <View style={{height:180,width,padding:10,paddingTop:0,flex:1,flexDirection:'row'}}>
            <View style={{flex:0.5,backgroundColor:'#ff5e5e',justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'black',fontSize:20,fontWeight:'100'}}>To Boldly Go</Text>
              <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>═̷͟═͟ ⊂⁀ ⊃</Text>
            </View>
          </View>
            
          <View style={{height:180,width}}></View>
          <View style={{height:180,width}}></View>
          <View style={{height:180,width}}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('textables', () => textables);

const content=[
  {
    "category":"Faces",
    "items": [
      {
        "name": "Oh well!",
        "art" : "¯\\_(ツ)_/¯"
      },
      {
        "name": "Disapproving Look",
        "art":  "ಠ_ಠ"
      },
      {
        "name": "Disapproving Look 2",
        "art":  "ఠ_ఠ"
      },
      {
        "name": "Glasses Smile",
        "art":  "ʘ‿ʘ"
      },
      {
        "name": "Devious Smile",
        "art":  "ಠ‿ಠ"
      },
      {
        "name": "Frowning",
        "art": "ಠ╭╮ಠ"
      },
      {
        "name": "Yelling",
        "art": "ಠoಠ"
      },
      {
        "name": "Mustache Man",
        "art": "ಠ▃ಠ"
      },
      {
        "name": "Blank Stare",
        "art": "ರ_ರ"
      },
      {
        "name": "HUH?",
        "art":  "ლ(｀ー´ლ)"
      },
      {
        "name": "Rosy Cheeks",
        "art":  "(｡◕‿◕｡)"
      },
      {
        "name": "hehehe",
        "art":  "( ¬‿¬)"
      },
      {
        "name": "Pointing Out",
        "art":  "☜(⌒▽⌒)☞"
      },
      {
        "name": "Haha!",
        "art":  "☜(ﾟヮﾟ☜)"
      },
      {
        "name": "Run Away Crying",
        "art":  "ε=ε=ε=┌(;*´Д`)ﾉ"
      },
      {
        "name": "Cheers",
        "art":  "（ ^_^）o自自o（^_^ ）"
      },
      {
        "name": "Up All Night",
        "art":  "۞_۞"
      },
      {
        "name": "High",
        "art":  "q(❂‿❂)p"
      },
      {
        "name": "Dazed & Confused",
        "art":  "⊙﹏⊙"
      },
      {
        "name": "No Clue!",
        "art":  "¯\\_(⊙︿⊙)_/¯"
      },
      {
        "name": "I Dunno",
        "art":  "¯\\(°_o)/¯ "
      },
      {
        "name": "Staring Eyes",
        "art":  "Ꙭ"
      },
      {
        "name": "Cat Eyes",
        "art": "ф_ф"
      },
      {
        "name": "Winking",
        "art": "◕‿↼"
      },
      {
        "name": "Reaching Down",
        "art":  "(,,Ծ‸Ծ,,)"
      },
      {
        "name": "Just Woke up",
        "art":  "╰(´・｀)ﾉ"
      },
      {
        "name": "Sleep Walking",
        "art":  "(¬º-°)¬"
      },
      {
        "name": "Disappointed Look",
        "art":  "(-_-)"
      }
    ]
  },
  {
    "category": "Emotions",
    "items": [
      {
        "name": "Angry",
        "art":  "{{|└(>o< )┘|}}"
      },
      {
        "name": "Why, God, WHY!?",
        "art":  "щ（ﾟДﾟщ）"
      },
      {
        "name": "In Love",
        "art":  "♥（｡✿‿✿｡）❤"
      },
      {
        "name": "In Love 2",
        "art":  "♥‿♥"
      },
      {
        "name": "Puzzled",
        "art":  "く(＾_・)ゝ"
      },
      {
        "name": "Mad",
        "art":  "（　ﾟДﾟ）"
      },
      {
        "name": "Whatever",
        "art":  "（＾～＾）ノ"
      },
      {
        "name": "Happy",
        "art":  "ヽ(´▽`)/"
      },
      {
        "name": "Love at First Sight",
        "art":  "꒰♡ˊ͈ ु꒳ ूˋ͈꒱.⑅*♡"
      },
      {
        "name": "Need A Hug",
        "art":  "ヽ(´ー｀)ノ"
      },
      {
        "name": "So Beautiful!",
        "art":  "ಥ_ಥ"
      },
      {
        "name": "Sad / Crying",
        "art":  "ಥ﹏ಥ"
      },
      {
        "name": "Embarrased",
        "art":  "(﹡⌒▽⌒﹡)"
      },
      {
        "name": "Extra Embarrased",
        "art":  "(/ω＼)"
      },
      {
        "name": "No Thanks",
        "art": "(ღ˘⌣˘ღ)"
      },
      {
        "name": "I've Seen The Light",
        "art": "•✞_✞•"
      }
    ]
  },
  {
    "category": "Characters",
    "items": [
      {
        "name": "Officer",
        "art":  "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄"
      },
      {
        "name": "PedoBear",
        "art":  "ᶘ ᵒᴥᵒᶅ"
      },
      {
        "name": "Deal WIth It!",
        "art":  "(⌐■_■)"
      },
      {
        "name": "Kid Has No Clue",
        "art":  "٩(͡๏̯͡๏)۶"
      },
      {
        "name": "No Clue 2",
        "art": "٩๏̯͡๏۶"
      },
      {
        "name": "Blob",
        "art":  "ヽ༼ຈل͜ຈ༽/"
      },
      {
        "name": "Party Boy",
        "art":  "┗(＾0＾)┓"
      },
      {
        "name": "Party Time",
        "art":  "┏(-_-)┛┗(-_-)┓┗(-_-)┛"
      },
      {
        "name": "Sparkles!",
        "art":  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
      },
      {
        "name": "Zoidberg",
        "art":  "(•ω•)"
      },
      {
        "name": "Bearing Gifts",
        "art":  "(´・ω・)っ由"
      },
      {
        "name": "Le Meme",
        "art":  "͡° ͜ʖ ͡°"
      },
      {
        "name": "Le Meme 2",
        "art":  "(͡° ͜ʖ ͡°)"
      },
      {
        "name": "Winky",
        "art": "( ͡~ ͜ʖ ͡°)"
      },
      {
        "name": "Big Nose",
        "art":  "(͡๏̯¿͡๏)"
      },
      {
        "name": "Baby",
        "art":  "（⌒◎⌒）"
      },
      {
        "name": "Asleep",
        "art":  "★☽(。￣-￣)"
      },
      {
        "name": "Singer",
        "art":  "♪＼(^o^)／♩"
      },
      {
        "name": "Dancing",
        "art":  "〈( ^.^)ノ"
      },
      {
        "name": "Writing a Note",
        "art":  "＿〆(。。)"
      },
      {
        "name": "Waving",
        "art":  "ヾ(＾∇＾)"
      },
      {
        "name": "Snowman",
        "art":  "☃"
      },
      {
        "name": "I Am Not A Crook!",
        "art": "✌.|•͡˘‿•͡˘|.✌"
      },
      {
        "name": "Alien",
        "art": "༺‿༻"
      },
      {
        "name": "Metalhead",
        "art": "\\m/ d-_-b \\m/"
      },
      {
        "name": "David Bowie",
        "art": "(･.◤)"
      },
      {
        "name": "Flying Spaghetti Monster",
        "art": "~;;o; ° ° ;;o;~"
      }
    ]
  },
  {
    "category": "Table Flip",
    "items": [
      {
        "name": "Classic Flip",
        "art":  "(╯°□°）╯︵ ┻━┻"
      },
      {
        "name": "Angry 2",
        "art":  "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻"
      },
      {
        "name": "One-Handed",
        "art":  "┬──┬﻿ ¯\\_(ツ)"
      },
      {
        "name": "Double / Scream",
        "art":  "┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻"
      },
      {
        "name": "Indifferent",
        "art":  "┬─┬ノ( º _ ºノ)"
      },
      {
        "name": "Angry 3",
        "art":  "(ノಠ益ಠ)ノ彡┻━┻"
      },
      {
        "name": "Monocle",
        "art":  "(╯ಠ_ರೃ)╯︵ ┻━┻"
      },
      {
        "name": "Person Flip",
        "art":  "(╯°□°）╯︵ /(.□. \\)"
      },
      {
        "name": "Jake the Dog",
        "art":  "(┛❍ᴥ❍﻿)┛彡┻━┻"
      },
      {
        "name": "Owl Flip",
        "art":  "(ʘ∇ʘ)ク 彡 ┻━┻"
      },
      {
        "name": "One-handed",
        "art":  "/(ò.ó)┛彡┻━┻"
      },
      {
        "name": "Trippin' Flip",
        "art":  "(┛◉Д◉)┛彡┻━┻"
      }
    ]
  },
  {
    "category": "Flexing",
    "items": [
      {
        "name": "Double Flex",
        "art":  "ᕙ(⇀‸↼‶)ᕗ"
      },
      {
        "name": "Superior Flex",
        "art":  "ᕙ(`▽´)ᕗ"
      },
      {
        "name": "One-Arm Flex",
        "art":  "ᕙ( ^ₒ^ c)"
      },
      {
        "name": "Boxing Champion",
        "art":  "ᕦ(ò_ó*)ᕤ"
      },
      {
        "name": "Happy-Go-Lucky",
        "art": "ᕕ( ᐛ )ᕗ"
      }
    ]
  },
  {
    "category": "Animals",
    "items": [
      {
        "name": "Cute Bear",
        "art":  "ʕ•ᴥ•ʔ"
      },
      {
        "name": "Bear In Headlights",
        "art":  "‹ʕᵒᴥᵒ­­­­­ʔ›﻿"
      },
      {
        "name": "Grizzly",
        "art":  "ლʕಠᴥಠʔლ"
      },
      {
        "name": "Bear Hug",
        "art":  "ʕु•̫͡•ʔु"
      },
      {
        "name": "Butterfly",
        "art":  "Ƹ̵̡Ӝ̵̨̄Ʒ"
      },
      {
        "name": "Dog",
        "art":  "(ᵔᴥᵔ)"
      },
      {
        "name": "Pig",
        "art":  "q(￣(oo)￣)p"
      },
      {
        "name": "Fat Pig",
        "art":  "^(｀（ ● ●）´ )^"
      },
      {
        "name": "Cute Pig",
        "art":  "<(ﾟ´(｡｡)`ﾟ)>"
      },
      {
        "name": "Angry Cat",
        "art":  "o(≧o≦)o"
      },
      {
        "name": "Cat",
        "art":  "（=ﾟ･ﾟ=）"
      },
      {
        "name": "Polar Bear",
        "art":  "(●￣(ｴ)￣ ●)"
      },
      {
        "name": "Fish",
        "art":  ">°))))彡"
      },
      {
        "name": "Swimming Fish",
        "art":  "～～ >°))))))))><<"
      },
      {
        "name": "Octopus",
        "art":  "(_/\\_(O O)_/\\_)"
      }
    ]
  },
  {
    "category": "Flip The Bird",
    "items": [
      {
        "name": "I Don't Care",
        "art":  "╭∩╮（︶︿︶）╭∩╮"
      },
      {
        "name": "Crazy Eyes",
        "art":  "┌∩┐(◣_◢)┌∩┐"
      },
      {
        "name": "Irreverent",
        "art":  "t ( - _ - t )"
      },
      {
        "name": "Go Away",
        "art":  "凸(-_-)凸"
      },
      {
        "name": "Mad",
        "art":  "凸 (｀0´)凸"
      },
      {
        "name": "Rage",
        "art":  "┌∩┐(﹒︠益﹒︡)┌∩┐"
      },
      {
        "name": "Steaming",
        "art":  "凸(`д´)凸"
      },
      {
        "name": "Indignant",
        "art":  "凸(｀⌒´メ)凸"
      },
      {
        "name": "Smiley",
        "art":  "凸( ͡° ͜ʖ ͡°)凸"
      }
    ]
  },
  {
    "category": "Phrases",
    "items": [
      {
        "name": "YOLO!",
        "art":  "Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ"
      },
      {
        "name": "O, RLY?",
        "art":  "﴾͡๏̯͡๏﴿ O'RLY?"
      },
      {
        "name": "Love",
        "art":  "ℒℴνℯ"
      }
    ]
  },
  {
    "category": "Objects",
    "items": [
      {
        "name": "Rose",
        "art":  "@>--;--"
      },
      {
        "name": "5 Bucks",
        "art":  "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]"
      },
      {
        "name": "Small Guns",
        "art":  " ̿ ̿̿'̿'\\̵͇̿̿\\=(•̪○)=/̵͇̿̿/'̿̿ ̿ ̿ ̿"
      },
      {
        "name": "Large Guns",
        "art":  "̿̿ ̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з=( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ "
      },
      {
        "name": "Submachine Gun",
        "art":  "⌐╦╦═─"
      },
      {
        "name": "Sniper Rifle",
        "art":  "▄︻̷̿┻̿═━一"
      },
      {
        "name": "Sniper Rifle 2",
        "art":  "▄︻̷̿┻̿┳═一"
      },
      {
        "name": "Cigarette",
        "art":  " ̜ ̳ ̳ ̳ ̳ ͙ ڪ"
      },
      {
        "name": "To Boldly Go...",
        "art":  "═̷͟═͟ ⊂⁀ ⊃"
      }
    ]
  },
  {
    "category": "Embelishments",
    "items": [
      {
        "name": "Border",
        "art":  "•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•"
      },
      {
        "name": "Heart / Music",
        "art":  "♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪"
      },
      {
        "name": "Customize Text 1",
        "art":  "˙·٠•●♥ Text ♥●•٠·˙"
      },
      {
        "name": "Customize Text 2",
        "art":  "•♥•♥•♥•♥•♥ Text ♥•♥•♥•♥•♥•"
      }
    ]
  },
  {
    "category": "Symbols",
    "items": [
      {
        "name": "Peace",
        "art":  "✌"
      },
      {
        "name": "Flower",
        "art":  "❀"
      },
      {
        "name": "Music Note",
        "art":  "♫"
      },
      {
        "name": "Music Note 2",
        "art":  "♪"
      },
      {
        "name": "Umbrella",
        "art":  "☂"
      },
      {
        "name": "Coffee",
        "art":  "☕"
      },
      {
        "name": "Kiss",
        "art":  "💋"
      }
    ]
  },
  {
    "category": "Disruptive",
    "items": [
      {
        "name": "Endless Tears",
        "art":  "Ỏ̷͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖̦̟͎̻̰_Ỏ̷͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖̦̟͎̻̰"
      }
    ]
  }
]
