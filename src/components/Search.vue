<template>
  <v-sheet
    class="d-flex flex-column justify-center align-center"
    color="white"
    height="100%"
    width="100%"
  >
    <input
      id="input_box"
      ref="Input"
      type="file"
      accept="image"
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
            class="mb-12 d-flex align-center justify-center"
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
    <v-sheet
      class="pt-16 d-flex justify-center align-center flex-column"
      height="200px"
      width="50vw"
    >
      <v-sheet class="mt-5 text-h5">
        Enter the iterations to simulate the parallel requests sending.
      </v-sheet>
      <v-text-field
        v-model="iterations"
        class="mt-5"
        label="Filled"
        placeholder="Enter the iterations"
        filled
      ></v-text-field>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",

  data() {
    return {
      rtt: [],
      startTime: [],
      endTime: [],
      iterations: 1,
      file: null,
      data: null,
      outdata: null,
      result: "No Result",
      url: require("../../resource/no_pic.png"),
    };
  },
  methods: {
    /**
     * slice the string to send in fragments to prevent the broken pipe
     * @param s
     * @returns {*[]}
     */
    sliceString: function (s) {
      let strings = [];
      let i = 0;
      let j = 1;
      for (; j < s.length; j++) {
        if (j % 30000 == 0) {
          strings.push(s.substring(i, j));
          i = j;
        }
      }
      strings.push(s.substring(i));
      strings.push("\n");
      return strings;
    },
    /**
     * handle click for the button to take the input
     */
    handleClick: function () {
      this.$refs.Input.click();
    },
    /**
     * upload the image to the load balance server
     * @param e
     */
    uploadImg: function (e) {
      let counts = 0;
      this.result = "Waiting for result.";
      this.file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        for (let i = 0; i < this.iterations; i++) {
          this.url = reader.result;
          let strings = this.sliceString(this.url);
          // alert(this.data);
          //socket
          // console.log(typeof this.url);

          //socket
          let socket = new WebSocket("ws://192.41.233.54:12345");
          // let socket = new WebSocket("ws://localhost:12345");
          let that = this;
          socket.onopen = function () {
            console.log("Connection open ...");
            // console.log(that);
            console.log("socket is connected");
            console.log(typeof that.url);

            that.startTime.push(new Date().getTime());
            for (let string of strings) {
              socket.send(string);
            }

            // socket.send(that.url);
          };
          socket.onmessage = function (event) {
            that.endTime.push(new Date().getTime());
            var data = event.data;
            console.log(data);
            that.result = data;
            socket.close();
          };
          socket.onclose = function () {
            console.log(counts);
            counts++;
            //check if it is last iteration
            if (counts == that.iterations) {
              console.log(that.startTime);
              console.log(that.endTime);
              for (let i = 0; i < that.startTime.length; i++) {
                that.rtt.push(that.endTime[i] - that.startTime[i]);
              }
              console.log(
                that.rtt.reduce((a, b) => a + b, 0) / that.iterations
              );
            }
          };
        }
      };
    },
  },
};
</script>

<style scoped>
#input_box {
  display: none;
}
@media (max-width: 1500px) {
  #card {
    height: 77vh !important;
    width: 44vw !important;
  }
}
@media (max-width: 700px) {
  #card {
    height: 100vh !important;
    width: 100vw !important;
  }
}
</style>
