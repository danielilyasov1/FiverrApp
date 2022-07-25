<template>
  <div class="mini-filter sticky">
    
        <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="min">
            MIN. <input/>
          </el-form-item>
          <el-form-item class="max">
            MAX. <input/>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">Apply</el-button>
          </el-form-item>
        </el-form> -->
   
    <el-select v-model="value" class="m-2" placeholder="Delivery Time" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <section class="gig-list grid">
    <div class="card" v-for="gig in gigs" :key="`gig-${gig._id}`">
      <gig-preview :gig="gig" />
    </div>
  </section>
</template>

<script>
import gigPreview from './gig-preview.cmp.vue';

export default {
  name: 'gigList',
  props: {
    gigs: Array,
  },
  components: {
    gigPreview,
  },
  data() {
    return {};
  },
  created() { },
  methods: {
  },
  computed: {},
  unmounted() { },
};
</script>