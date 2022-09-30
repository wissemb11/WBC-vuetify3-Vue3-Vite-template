<template>
  <div>
    <h1>Html div content stylished using vuetify class</h1>
    <WBC
      :item="{
        comp: 'div',
        props: {
          html: 'Html div content stylished using vuetify class',
          class: 'bg-purple-darken-2 text-center text-h1',
        },
      }"
    ></WBC>
    <h1>WBC and vuetify components</h1>
    <h2>simple type with ADJACENT wrap vuetify components</h2>
    <WBC
      :item="true"
      wrap="VCard"
      :props="{ class: 'bg-green-darken-2 text-center text-h5', html: 'dddd' }"
    ></WBC>
    <h2>Array type with ADJACENT wrap vuetify components and WBHtml</h2>
    <WBC
      :item="[true, 11111, '[[bla bla|text-h1|dff]]', 'ali', 888]"
      wrap="VCard"
      :props="{ class: 'bg-green-darken-2 text-center text-h5', html: 'dddd' }"
    ></WBC>
    <h2>Array type with NESTED wrap is vuetify components</h2>

    <WBC
      :item="[true, 11111, 'bla bla', 'ali', 888]"
      wrap="~VAlert"
      :props="{ class: 'bg-purple-darken-2 text-center text-h5', html: 'dddd' }"
    ></WBC>
    <WBC :item="[true, 11111, 'bla bla', 'ali', 888]" wrap="VCard"></WBC>

    <h1>GWBC:item is an object with item.comp a vuetify components</h1>
    <h2>item.comp='VContainer'</h2>
    <WBC
      :item="{
        comp: 'VContainer',
        props: {
          class: 'bg-purple-darken-2 text-center text-h1',
          html: 'I am a VContainer content',
        },
      }"
    >
    </WBC>
    <h2>item.comp='VCheckbox'</h2>
    binded to item.props.val===>{{ GWBC_VCheckbox.props.val }}
    <WBC :item="GWBC_VCheckbox"> </WBC>

    <h2>item.comp='VTextField'</h2>

    binded to item.props.val===>{{ GWBC_VTextField.props.val }}

    <WBC :item="GWBC_VTextField"> </WBC>

    <h2>item.comp='VSelect'</h2>
    <ol>
      <li>item.props.hide:false</li>
      <li>item.props.key:???</li>
      <li>item.props.item-title:v=>v.???</li>
      <li>item.props.item-value:v=>v.???</li>
      <li>item.props.return-object:v=>v.???</li>
      <li>item.props.to:url/subUrl/internalRoute</li>
      <li>----------------</li>
      <li>item.initial::v=>v.???</li>
      <li>item.events::v=>v.???</li>
      <li>item.href:url/subUrl/internalRoute</li>
    </ol>
    {{ GWBC_VSelect }}
    <WBC :item="GWBC_VSelect" :key="GWBC_VSelect.props.key"> </WBC>
  </div>
</template>
<script>
// import Vuex from 'vuex'
// import generalData from './generalData.js'
export default {
  name: "appWBC",
  props: {
    externalData: {
      type: Object,
      default: () => {
        return null;
      },
    },
    routeParams: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  data() {
    return {
      key: "key-1",
      checkbox: !true,
      GWBC_VCheckbox: {
        comp: "VCheckbox",
        props: {
          val: true,
          label: " this is a VCheckbox",
          style: { backgroundColor: "green" },
          // class:'bg-purple-darken-2 text-center text-h1',
          headers:
            "[[<br><b>headers</b><br>|bg-purple-darken-2 text-center text-h6|fgfgfdg]]",
        },
      },
      GWBC_VTextField: {
        comp: "VTextField",
        props: {
          class: "bg-purple-darken-2 text-center text-h1",
          html: "dddd",
        },
      },
      GWBC_VSelect: {
        comp: "VSelect",
        props: {
          hide: !true,
          // key: 'keyy',
          class: "bg-purple-darken-2 text-center text-h1",
          html: "dddd",
          items: [
            { state: "Florida", abbr: "FL" },
            { state: "Georgia", abbr: "GA" },
            { state: "Nebraska", abbr: "NE" },
            { state: "California", abbr: "CA" },
            { state: "New York", abbr: "NY" },
          ],
          "item-title": (v) => v.state + 11111,
          "item-value": "abbr",
          label: "Select",
          "persistent-hint": true,
          "return-object": true,
          chips: !false,
          "single-line": false,
          // to:"https://github.com"
          // to:v=>v.state,
          // to_:v=>v.state
          to: (v) => v.state,
        },
        // href:{to:'https://yahoo.com'}
        // href:'https://yahoo.com',
        href: "https://google.com",
        initial: (v, p) => {
          v.comp = "li";
          (v.props.html =
            "I am just loaded. Right click on me to switch to VSelect"),
            (v.props.label += "abc");
          // v.props.key += 1
          // v.props.key+=1
          // v.props.items.push({ state: "aaaa" })
        },
        events: {
          contextmenu: (v) => {
            alert("contextmenu event & item_props.html=" + v.props.html);
            v.comp = "VSelect";
            v.props.key += 1;
          },
          // contextmenu: (v) => alert('contextmenu event & item_props.html=' + v.props.html),
          // click: () => alert('rrrrrrr'),
          // keyup: (e) => obj.onKeyUp(e),
          // mousedown: (v) => alert('mousedown event & item_props.html=' + v.props.html),
          // mouseup: doThat
        },
      },
      languages: ["en", "es", "fr"],
    };
  },
  mounted() {},
  methods: {
    onLanguageChange(lang) {
      alert("new lang" + lang);
    },
  },
  created() {},
};
</script>
<style></style>
