<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  <router-view/> -->
    <mainNav></mainNav>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <twMap
            style="transi"
            :update_tw_map="update_tw_map"
            @get_active="get_active"
          ></twMap>
        </div>
        <div class="col-12  col-lg-8">
          <h1 class="col_title py-4 d-flex justify-content-center">
            {{ title }}-
            <select
              v-model="country_name"
              class="form-select country_select"
              aria-label="Default select example"
            >
              <option selected disabled>選擇縣市</option>
              <option
                v-for="(country, i) in countries"
                :key="i"
                :value="country.locationName"
              >
                {{ country.locationName }}
              </option>
            </select>

            <!-- {{ country_name }} -->
          </h1>

          <div class="row">
            <div class="col-5" id="maxT_area">
              <div class="area_wrapper">
                <div
                  class="area_section"
                  :style="`background: linear-gradient(180deg,
                  rgba(226, 125, 95, ${
                    time.parameter.parameterName / 40
                  }), white
                  )
                  `"
                  v-for="(time, i) in maxT.time"
                  :key="i"
                >
                  <div class="area_time">
                    <span class="area_starTime">{{ time.startTime }}</span>
                    <span>|</span>
                    <span class="area_endTime">{{ period(time.endTime) }}</span>
                  </div>

                  <h4 class="area_rating">
                    <span>最高溫度</span>
                    <span>
                      {{
                        time.parameter.parameterName +
                        "度" +
                        time.parameter.parameterUnit
                      }}
                    </span>
                  </h4>

                  <!-- <div class="area_time">
                    <span class="area_starTime">{{ time.startTime }}</span>
                    <span>|</span>
                    <span class="area_endTime">{{ time.endTime }}</span>
                  </div> -->
                </div>
              </div>
            </div>

            <div class="col-2 p-0" id="MinT_area">
              <div class="area_wrapper">
                <div
                  class="area_section"
                  :style="`background:
                  
                  linear-gradient(180deg,
                  rgba(226, 125, 95, ${
                    time.parameter.parameterName / 40
                  }), white
                  )`"
                  v-for="(time, i) in MinT.time"
                  :key="i"
                >
                  <h4 class="area_rating">
                    <span>最低溫度</span>
                    <span>
                      {{
                        time.parameter.parameterName +
                        "度" +
                        time.parameter.parameterUnit
                      }}
                    </span>
                  </h4>

                  <!-- <div class="area_time">
                    <span class="area_starTime">{{ time.startTime }}</span>
                    <span>|</span>
                    <span class="area_endTime">{{ time.endTime }}</span>
                  </div> -->
                </div>
              </div>
            </div>

            <div class="col-2 p-0" id="POP_area">
              <div class="area_wrapper">
                <div
                  class="area_section"
                  :style="`background:
                  linear-gradient(180deg,
                  rgba(0, 102, 204, ${
                    time.parameter.parameterName / 100
                  }), white)`"
                  v-for="(time, i) in POP.time"
                  :key="i"
                >
                  <h4 class="area_rating">
                    <span>降雨機率</span>
                    <span>
                      {{ time.parameter.parameterName
                      }}{{
                        time.parameter.parameterUnit == "百分比"
                          ? "%"
                          : time.parameter.parameterUnit
                      }}
                    </span>
                  </h4>
                  <!-- <div class="area_time">
                    <span class="area_starTime">{{ time.startTime }}</span>
                    <span>|</span>
                    <span class="area_endTime">{{ time.endTime }}</span>
                  </div> -->
                </div>
              </div>
            </div>

            <div class="col" id="wx_area">
              <!-- <h3>氣候:{{ wx.elementName }}</h3> -->
              <div class="area_wrapper">
                <div
                  class="area_section"
                  :style="`background:rgba(0, 102, 204, ${
                    time.parameter.parameterName / 100
                  })`"
                  v-for="(time, i) in wx.time"
                  :key="i"
                >
                  <h4 class="area_rating">
                    <span>氣候</span>
                    <span>{{ time.parameter.parameterName }}</span>
                    <span>{{ time.parameter.parameterValue }}</span>
                  </h4>

                  <!-- <div class="area_time">
                    <span class="area_starTime">{{ time.startTime }}</span>
                    <span>|</span>
                    <span class="area_endTime">{{ time.endTime }}</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <!-- <div id="CI_area">
            <div class="area_wrapper">
              <div
                class="area_section"
                :style="`background: linear-gradient(90deg, rgba(232, 168, 124, 0.4) ${CI_number}%, rgba(0, 102, 204, 0.4) ${CI_number}%);`"
                v-for="(time, i) in CI.time"
                :key="i"
              >
                <h4 class="area_rating">
                  <span>舒適度</span>
                  <span>
                    {{ time.parameter.parameterName }}
                  </span>
                </h4>

                <div class="area_time">
                  <span class="area_starTime">{{ time.startTime }}</span>
                  <span>|</span>
                  <span class="area_endTime">{{ time.endTime }}</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainNav from "./components/nav.vue";
import twMap from "./components/tw_map.vue";
export default {
  name: "App",
  components: {
    mainNav,
    twMap,
  },
  data() {
    return {
      country_name: "",
      title: "",
      countries: [],
      wx: {}, // 氣候
      POP: {}, // 降雨率
      MinT: {}, //最低溫
      CI: {}, //舒適度
      maxT: {}, //最高溫
      update_tw_map: "",
    };
  },
  methods: {
    get_active(country) {
      this.country_name = country;
      this.get_active_data_of_country(country);
    },
    get_wather_data() {
      var api =
        "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-515CB401-8DE7-4F50-A18F-477C0E6DB913";
      this.axios.get(api).then((res) => {
        var weather_data = res.data;
        if (res.data.success) {
          this.country_weather_handler(weather_data.records.location);
          this.country_title_handler(weather_data.records.datasetDescription);
        } else {
          alert("網路連線錯誤");
          window.location.reload();
        }
      });
    },
    country_weather_handler(countries) {
      this.countries = countries;
    },
    country_title_handler(title) {
      this.title = title;
    },
    get_active_data_of_country(country) {
      var that = this;
      var countries = this.countries;
      countries.forEach(function (item, i) {
        if (item.locationName == country) {
          setTimeout(function () {
            that.wx = item.weatherElement[0];
            that.POP = item.weatherElement[1];
            that.MinT = item.weatherElement[2];
            that.CI = item.weatherElement[3];
            that.maxT = item.weatherElement[4];
            // console.log('country:',that.maxT,  country, item.weatherElement[4]);
          }, 0);
          // [0] wx氣候 [1]Pop降雨率  [2] MinT最低溫 [3]CI舒適度  [4]ＭaxT最高溫
        }
      });
    },
    period(endTime) {
      if (endTime.includes("18:00:00")) {
        return "中午至晚上";
      } else if (endTime.includes("06:00:00")) {
        return "晚上至清晨";
      } else {
        return "清晨至中午";
      }
    },
  },
  computed: {
    // 舒適至悶熱 舒適 稍有寒意至舒適 寒冷至舒適  寒冷至稍有寒意
    CI_number: function () {
      return 10;
    },
  },
  watch: {
    country_name: function (newVal) {
      this.update_tw_map = newVal;
      this.get_active_data_of_country(newVal);
    },
  },
  created() {
    this.get_wather_data();
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
.col_title {
  text-align: center;
}
.country_select {
  max-width: 215px;
}
</style>
