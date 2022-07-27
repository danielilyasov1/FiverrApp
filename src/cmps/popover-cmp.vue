<template>
    <el-button ref="buttonRef" v-click-outside="onClickOutside">Budget</el-button>
    <el-popover ref="popoverRef" :virtual-ref="buttonRef" width='325px' trigger="click" virtual-triggering>
        <el-form :inline="true" class="demo-form-inline">
            <div class="flex budgetInputs">
            <el-form-item class="min">
                MIN.<input width="110px" placeholder="Any" v-model.number="filterBy.min" />
            </el-form-item>
            <el-form-item class="max">
                MAX. <input width="110px" placeholder="Any" v-model.number="filterBy.max" />
            </el-form-item>
            </div>
            <hr>
            <el-form-item>
                <el-button @click="onClickButton" type="success">Apply</el-button>
                <el-button>Clear All</el-button>
            </el-form-item>
        </el-form>
    </el-popover>

    <el-button ref="buttonRef2" v-click-outside="onClickOutside2">Delivery Time</el-button>
    <el-popover ref="popoverRef2" :virtual-ref="buttonRef2" width='279px' trigger="click" virtual-triggering>
        <el-form label-width="120px">
            <el-form-item>
                <el-radio-group v-model="radio">
                    <el-radio label="Express 24H" />
                    <el-radio label="Up to 3 days" />
                    <el-radio label="Up to 7 days" />
                    <el-radio label="Anytime" />
                </el-radio-group>
            </el-form-item>
            <hr>
            <el-form-item>
                <el-button @click="onClickButton" type="success">Apply</el-button>
                <el-button>Clear All</el-button>
            </el-form-item>
        </el-form>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const emit = defineEmits(['submit'])
const buttonRef = ref()
const buttonRef2 = ref()
const popoverRef = ref()
const popoverRef2 = ref()
const filterBy = ref({
    max: 900,
    min: 0
})
const radio = ref(3)

const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
    }
const onClickOutside2 = () => {
    // unref(popoverRef2).popperRef?.delayHide?.()
    }
const onClickButton = () => {
    emit('submit', filterBy.value)
}
</script>