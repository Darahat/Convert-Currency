<template>
  <Page class="page" background="white">
    <ActionBar class="action-bar" title="Home"/>
<ScrollView>
<StackLayout >

<GridLayout v-show="surprise1 || surprise2" columns="85,250, 80" rows="50,90, 90">
 <TextField  class=" input rounded" v-model="inputvalue" row="1" col="1" hint="Enter text..." />
 
 <Button :text="country1"  @tap="selectCountry1" class="btn btn-outline btn-rounded-lg" row="1" col="2"></Button>
<Image row="1" width="150" col="0" src="http://flags.fmcdn.net/data/flags/w580/bd.png" class="p-5 m-5 img img-circle" />
   <TextField   :text="oneunit" class="input input-rounded m-t-10" row="2" col="1"  editable=false  />
    <Image col="0" width="150" row="2" class="p-5 m-5 img img-circle" src="http://flags.fmcdn.net/data/flags/w580/us.png"/>
   <Button :text="country2" @tap="selectCountry2" class="btn btn-outline btn-rounded-lg" row="2" col="2" ></Button>
</GridLayout>


<ListPicker class="fontawesome" v-show="!surprise1" :items="country" @tap="selectedCountry1();convertCurrency();" v-model="selectedListPickerIndex" />
<ListPicker class="fontawesome" v-show="!surprise2" :items="country" @tap="selectedCountry2();convertCurrency();" v-model="selectedListPickerIndex" />
</StackLayout>

 
</ScrollView>
  </Page>
</template>
<script >
import axios from 'axios'
import http from 'http'
export default {
  data(){
    return{
      surprise1:true,
      inputvalue:0,
      oneunit:0,
      surprise2:true,
      country1:'BD',
      country2:'USD',
    country:[
     ["(Australia)","AUD"],
     ["(Bretain)","GBP"],
     ["(Euro)","EUR"],
     "JPY",
     "CHF",
     "USD",
     "AFN",
     "ALL",
     "DZD",
     "AOA",
     "ARS",
     "AMD",
     "AWG",
     "AUD",
     "ATS (EURO)",
     "BEF (EURO)",
     "AZN",
     "BSD",
     "BHD",
     "BDT",
     "BBD",
     "BYR",
     "BZD",
     "BMD",
     "BTN",
     "BOB",
     "BAM",
     "BWP",
     "BRL",
     "GBP",
     "BND",
     "BGN",
     "BIF",
     "XOF",
     "XAF",
     "XPF",
     "KHR",
     "CAD",
     "CVE",
     "KYD",
     "CLP",
     "CNY",
     

    ],
     selectedListPickerIndex: 0,
    }
  },
  methods:{
    selectCountry1(){
      this.surprise1=false
      // console.log(this.surprise1)
    },
    selectCountry2(){
      this.surprise2=false
      // console.log(this.surprise2)
    },
    selectedCountry1(){
      this.surprise1=true
      // console.log(this.surprise1)
      // console.log(this.country[this.selectedListPickerIndex][1])
    this.country1=this.country[this.selectedListPickerIndex][1]
    },
    selectedCountry2(){
      this.surprise2=true
      this.country2=this.country[this.selectedListPickerIndex][1]
    },
    convertCurrency(){
      console.log(this.country2)
      console.log(this.country1)
            const http = require("http");
      const vm = this
      axios.get('http://data.fixer.io/api/latest?access_key=b0f3463a9a62817a699073c4c5c99de2&symbols='+this.country1+','+this.country2).then(response => {
      //  vm.items2 = response.data
      this.oneunit=(response.data.rates[this.country2]/response.data.rates[this.country1])*this.inputvalue
    console.log('\n\n\n\n')
    console.log(oneunit)
    console.log(response.data.rates)
}, function (e) {
    console.log('Error is here\n\n\n\n\n\n\n\n\n')
    console.log(e);
});
    }
  }
}
</script>
<style>
.input-border{

background:gray;
opacity: .3;
border-color: blue

}


.fontawesome{
  font-family: 'fontawesome-webfont';
  font-size:24;
}
</style>
