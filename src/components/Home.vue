<template>
  <Page class="page" background="white">
    <ActionBar class="action-bar" title="Currency Converter">
      <label text="Convert Currency" class="fontawesomeTitle" horizontalAlignment="center" />
    </ActionBar>

    <StackLayout>
      <StackLayout backgroundColor="#4c4cff" >
        <label :text="date()" horizontalAlignment="center" color="white" class="m-12"></label>
      </StackLayout>

      <stackLayout v-if="surprise1 && surprise2" @tap="selectCountry1();convertCurrency();">
        <CardView  class="cardStyle" margin="10" radius="10" backgroundColor="#d3d3d3">
          <GridLayout  columns="80,auto,auto,auto," rows="auto,auto, auto">
            <Image row="1" width="150" @tap="convertCurrency()" col="0" :src="'http://flags.fmcdn.net/data/flags/w580/' +flag1+ '.png'"
              class="p-5 m-5 img " />
              <label :text="country1" @tap="selectCountry1();convertCurrency(); " row="1" class="fontawesomeTitle m-l-24 m-t-24" col="2"></label>
              <label  :text="countryname1"  textWrap="true" row="1" col="1" class="fontawesome m-l-24 m-t-24"/>
 
           <label :text="'\uf063'"   row="1" col="3" class="fontawesome m-l-24 m-t-24"/>
          </GridLayout>
        </CardView>
      </stackLayout>

      <stackLayout v-if="surprise1 && surprise2">
        <CardView class="cardStyle" margin="10" radius="10">
          <TextField class=" input rounded" @tap="convertCurrency()" v-model="inputvalue" row="1" col="1" hint="Enter Amount.." />
        </CardView>
      </stackLayout>



      <stackLayout v-if="surprise1 && surprise2" @tap="selectCountry2();convertCurrency();">
        <CardView class="cardStyle" margin="10" radius="10"  backgroundColor="#d3d3d3">
          <GridLayout  columns="80,auto,auto,auto" rows="auto,auto, auto">
            <Image col="0" width="150" row="1" @tap="convertCurrency()" class="p-5 m-5 img " :src="'http://flags.fmcdn.net/data/flags/w580/' +flag2+ '.png'"
            />
            <label :text="country2" @tap="selectCountry2();convertCurrency();" row="1" class="fontawesomeTitle m-l-24 m-t-24" col="2"></label>
             <label  :text="countryname2"   row="1" col="1" class="fontawesome m-l-24 m-t-24"/>
 
            <label :text="'\uf063'"  horizontalAlignment="right"  row="1" col="3" class="fontawesome m-l-24 m-t-24"/>
          </GridLayout>
        </CardView>
      </stackLayout>

          <stackLayout v-if="surprise1 && surprise2">
        <CardView class="cardStyle" margin="10" radius="10">
            <TextField :text="oneunit" @tap="convertCurrency()" class="input input-rounded m-t-4" row="2" col="1" editable=false />
        </CardView>
      </stackLayout>

      <GridLayout>
        <label v-if="!surprise1 && !surprise2" text="Select A Country"></label>
        <ListPicker row="2" class="fontawesomeTitle" v-show="!surprise1 && surprise2" :items="country" @tap="selectedCountry1() " v-model="selectedListPickerIndex"
        />
        <ListPicker row="2" class="fontawesomeTitle" v-show="!surprise2 && surprise1" :items="country" @tap="selectedCountry2();" v-model="selectedListPickerIndex"
        />
      </GridLayout>
    </StackLayout>

  </Page>
</template>
<script>
  import axios from 'axios'
  import http from 'http'

  import data from '../assets/data/data.json'
  export default {
    data() {
      return {
        surprise1: true,
        inputvalue: 0,
        country: [
          "Bangladesh",
          "Belgium",
          "Burkina Faso",
          "Bulgaria",
          "Bosnia and Herzegovina",
          "Barbados",
          "Wallis and Futuna",
          "Saint Barthelemy",
          "Bermuda",
          "Brunei",
          "Bolivia",
          "Bahrain",
          "Burundi",
          "Benin",
          "Bhutan",
          "Jamaica",
          "Bouvet Island",
          "Botswana",
          "Samoa",
          "Bonaire, Saint Eustatius and Saba ",
          "Brazil",
          "Bahamas",
          "Jersey",
          "Belarus",
          "Belize",
          "Russia",
          "Rwanda",
          "Serbia",
          "East Timor",
          "Reunion",
          "Turkmenistan",
          "Tajikistan",
          "Romania",
          "Tokelau",
          "Guinea-Bissau",
          "Guam",
          "Guatemala",
          "South Georgia and the South Sandwich Islands ",
          "Greece",
          "Equatorial Guinea",
          "Guadeloupe",
          "Japan",
          "Guyana",
          "Guernsey",
          "French Guiana",
          "Georgia",
          "Grenada",
          "United Kingdom",
          "Gabon",
          "El Salvador",
          "Guinea",
          "Gambia",
          "Greenland",
          "Gibraltar",
          "Ghana",
          "Oman",
          "Tunisia",
          "Jordan",
          "Croatia",
          "Haiti",
          "Hungary",
          "Hong Kong",
          "Honduras",
          "Heard Island and McDonald Islands",
          "Venezuela",
          "Puerto Rico",
          "Palestinian Territory",
          "Palau",
          "Portugal",
          "Svalbard and Jan Mayen",
          "Paraguay",
          "Iraq",
          "Panama",
          "French Polynesia",
          "Papua New Guinea",
          "Peru",
          "Pakistan",
          "Philippines",
          "Pitcairn",
          "Poland",
          "Saint Pierre and Miquelon",
          "Zambia",
          "Western Sahara",
          "Estonia",
          "Egypt",
          "South Africa",
          "Ecuador",
          "Italy",
          "Vietnam",
          "Solomon Islands",
          "Ethiopia",
          "Somalia",
          "Zimbabwe",
          "Saudi Arabia",
          "Spain",
          "Eritrea",
          "Montenegro",
          "Moldova",
          "Madagascar",
          "Saint Martin",
          "Morocco",
          "Monaco",
          "Uzbekistan",
          "Myanmar",
          "Mali",
          "Macao",
          "Mongolia",
          "Marshall Islands",
          "Macedonia",
          "Mauritius",
          "Malta",
          "Malawi",
          "Maldives",
          "Martinique",
          "Northern Mariana Islands",
          "Montserrat",
          "Mauritania",
          "Isle of Man",
          "Uganda",
          "Tanzania",
          "Malaysia",
          "Mexico",
          "Israel",
          "France",
          "British Indian Ocean Territory",
          "Saint Helena",
          "Finland",
          "Fiji",
          "Falkland Islands",
          "Micronesia",
          "Faroe Islands",
          "Nicaragua",
          "Netherlands",
          "Norway",
          "Namibia",
          "Vanuatu",
          "New Caledonia",
          "Niger",
          "Norfolk Island",
          "Nigeria",
          "New Zealand",
          "Nepal",
          "Nauru",
          "Niue",
          "Cook Islands",
          "Kosovo",
          "Ivory Coast",
          "Switzerland",
          "Colombia",
          "China",
          "Cameroon",
          "Chile",
          "Cocos Islands",
          "Canada",
          "Republic of the Congo",
          "Central African Republic",
          "Democratic Republic of the Congo",
          "Czech Republic",
          "Cyprus",
          "Christmas Island",
          "Costa Rica",
          "Curacao",
          "Cape Verde",
          "Cuba",
          "Swaziland",
          "Syria",
          "Sint Maarten",
          "Kyrgyzstan",
          "Kenya",
          "South Sudan",
          "Suriname",
          "Kiribati",
          "Cambodia",
          "Saint Kitts and Nevis",
          "Comoros",
          "Sao Tome and Principe",
          "Slovakia",
          "South Korea",
          "Slovenia",
          "North Korea",
          "Kuwait",
          "Senegal",
          "San Marino",
          "Sierra Leone",
          "Seychelles",
          "Kazakhstan",
          "Cayman Islands",
          "Singapore",
          "Sweden",
          "Sudan",
          "Dominican Republic",
          "Dominica",
          "Djibouti",
          "Denmark",
          "British Virgin Islands",
          "Germany",
          "Yemen",
          "Algeria",
          "United States",
          "Uruguay",
          "Mayotte",
          "United States Minor Outlying Islands",
          "Lebanon",
          "Saint Lucia",
          "Laos",
          "Tuvalu",
          "Taiwan",
          "Trinidad and Tobago",
          "Turkey",
          "Sri Lanka",
          "Liechtenstein",
          "Latvia",
          "Tonga",
          "Lithuania",
          "Luxembourg",
          "Liberia",
          "Lesotho",
          "Thailand",
          "French Southern Territories",
          "Togo",
          "Chad",
          "Turks and Caicos Islands",
          "Libya",
          "Vatican",
          "Saint Vincent and the Grenadines",
          "United Arab Emirates",
          "Andorra",
          "Antigua and Barbuda",
          "Afghanistan",
          "Anguilla",
          "U.S. Virgin Islands",
          "Iceland",
          "Iran",
          "Armenia",
          "Albania",
          "Angola",
          "Antarctica",
          "American Samoa",
          "Argentina",
          "Australia",
          "Austria",
          "Aruba",
          "India",
          "Aland Islands",
          "Azerbaijan",
          "Ireland",
          "Indonesia",
          "Ukraine",
          "Qatar",
        ],
        oneunit: 0,
        surprise2: true,
        country1: 'BDT',
        country2: 'USD',
        flag1: 'bd',
        flag2: 'us',
        dd:'hello',
        mm:'',
        yyyy:'',
        today:'',
        todaydate: '',
        countryname1:'Bangladesh',
        countryname2:'United States',
        selectedListPickerIndex: 0,
      }
    },
    watch: {
      inputvalue() {

        return this.convertCurrency()
      },
      selectedListPickerIndex() {
        return this.convertCurrency()
      },
      },
    // mounted(){
    //   this.convertCurrency()
    // },
    methods: {
      selectCountry1() {
        this.surprise1 = false
        this.surprise2 = true
      },
      selectCountry2() {
        this.surprise2 = false
        this.surprise1 = true
        // console.log(this.surprise2)
      },
      selectedCountry1() {
        this.surprise1 = true
        // console.log(this.surprise1)
        // console.log(this.country[this.selectedListPickerIndex][1])
        axios.get('https://api.myjson.com/bins/14vppq').then(response => {
          console.log('response is here\n\n\n\n\n\n\n\n\n')
          this.country1 = response.data[this.selectedListPickerIndex].money
          this.flag1 = response.data[this.selectedListPickerIndex].flag
          this.countryname1=response.data[this.selectedListPickerIndex].name
          console.log(this.country1)
          this.convertCurrency()
          return this.country1;
          this.flag1
        }, function (e) {
          console.log(e);
        });
      },
      selectedCountry2() {
        this.surprise2 = true

        axios.get('https://api.myjson.com/bins/14vppq').then(response => {
            console.log('response is here\n\n\n\n\n\n\n\n\n')
            this.country2 = response.data[this.selectedListPickerIndex].money
            this.flag2 = response.data[this.selectedListPickerIndex].flag
            this.countryname2=response.data[this.selectedListPickerIndex].name
            console.log(this.country2)
            this.convertCurrency()
            return this.country2;
            this.flag2
          },
          function (e) {
            console.log(e);
          });
      },

      convertCurrency() {
        const vm = this

        axios.get('http://data.fixer.io/api/latest?access_key=b0f3463a9a62817a699073c4c5c99de2&symbols=' + this.country1 +
          ',' + this.country2).then(response => {
          //  vm.items2 = response.data
          this.oneunit = (response.data.rates[this.country2] / response.data.rates[this.country1]) * this.inputvalue
          console.log("convertCurrency called")
          console.log(this.country2)
          console.log(this.country1)
          console.log(this.inputvalue)
          return this.oneunit
        }, function (e) {
          console.log('Error is here\n\n\n\n\n\n\n\n\n')
          console.log(e);
        });
      },
       date(){
      this.today = new Date();
 this.dd = this.today.getDate();
this.mm = this.today.getMonth()+1; //January is 0!
this.yyyy = this.today.getFullYear();


if(this.mm===1){
this.mm="January"
}
else if(this.mm===2){
 this.mm="February"
}
else if(this.mm===3){
  this.mm="March"
}
else if(this.mm===4){
  this.mm="April"
}
else if(this.mm===5){
  this.mm="May"
}
else if(this.mm===6){
  this.mm="June"
}
else if(this.mm===7){
  this.mm="July"
}
else if(this.mm===8){
  this.mm="August"
}
else if(this.mm===9){
  this.mm="September"
}
else if(this.mm===10){
  this.mm="October"
}
else if(this.mm===11){
  this.mm="November"
}
else if(this.mm===12){
  this.mm="December"
}

 
this.today = this.dd + ' ' + this.mm + ' ' + this.yyyy;

// this.todaydate=today
return this.today
      }
    }
}
</script>
<style>
  .input-border {

    background: gray;
    opacity: .3;
    border-color: blue
  }


  .fontawesome {
    font-family: 'fontawesome-webfont';
    font-size: 13;
  }
  .fontawesomeTitle {
    font-family: 'fontawesome-webfont';
    font-size: 18;
  }
</style>
 
