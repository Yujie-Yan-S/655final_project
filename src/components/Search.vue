<template>
  <v-sheet
    class="d-flex justify-center align-center"
    color="white"
    height="100%"
    width="100%"
  >
    <input
      id="input_box"
      ref="Input"
      type="file"
      accept="image/png"
      @change="uploadImg($event)"
    />
    <v-card id="card" width="25vw" height="50vh" elevation="3" color="#ebebeb">
      <v-img contain width="100%" height="70%" :src="url"></v-img>

      <v-card-title>{{ result }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-sheet
        id="uploadImg"
        class="d-flex flex-column"
        rounded
        height="30%"
        @click="handleClick()"
      >
        <v-hover v-slot="{ hover }">
          <v-sheet
            class="d-flex align-center justify-center"
            :elevation="hover ? 12 : 3"
            width="100%"
            height="100%"
            ><v-icon id="icon" size="100px">
              mdi-plus-circle-outline
            </v-icon></v-sheet
          >
        </v-hover>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",

  data() {
    return {
      file: null,
      data: null,
      outdata: null,
      result: "No Result",
      url: require("../../resource/no_pic.png"),
    };
  },
  methods: {
    handleClick: function () {
      this.$refs.Input.click();
    },
    uploadImg: function (e) {
      console.log(e);
      this.file = e.target.files[0];
      var reader = new FileReader();
      let formData = new FormData();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.data = reader.result;
        formData.append("file", this.data);
        this.outdata = formData.get("file");
        this.url = this.outdata;
        alert(this.data);
        //socket
        //socket
      };
    },
  },
};
</script>

<style scoped>
#input_box {
  display: none;
}
#card {
  margin-top: -300px;
}
@media (max-width: 1200px) {
  #card {
    height: 77vh !important;
    width: 44vw !important;
    margin-top: -100px;
  }
}
@media (max-width: 500px) {
  #card {
    height: 100vh !important;
    width: 100vw !important;
    margin-top: 0;
  }
}
</style>
