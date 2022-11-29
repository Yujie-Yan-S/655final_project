<template>
  <v-sheet
    class="d-flex justify-center align-center"
    color="white"
    height="100%"
    width="100%"
  >
    <v-sheet
      id="uploadImg"
      class="d-flex flex-column"
      rounded
      elevation="2"
      height="30%"
      width="35%"
    >
      <!--      <v-file-input-->
      <!--        ref="fileId"-->
      <!--        v-model="file"-->
      <!--        truncate-length="15"-->
      <!--        @change="uploadImg()"-->
      <!--      ></v-file-input>-->

      <!--      <v-sheet color="red">-->
      <!--        {{ outdata }}-->
      <!--      </v-sheet>-->
    </v-sheet>
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
      outdata: 123,
    };
  },
  methods: {
    uploadImg: function () {
      var reader = new FileReader();
      let formData = new FormData();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.data = reader.result;
        formData.append("file", this.data);
        this.outdata = formData.get("file");
      };
    },
  },
};
</script>

<style scoped></style>
