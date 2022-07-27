<template>
    <el-button class="budgetbtn" ref="buttonRef" v-click-outside="onClickOutside">Budget<svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg></el-button>
    <el-popover ref="popoverRef" :virtual-ref="buttonRef" width='325px' trigger="click" virtual-triggering>
        <el-form :inline="true" class="demo-form-inline">
            <div class="flex budgetInputs">
            <el-form-item class=" inputt min">
                MIN.<input placeholder="Any" v-model.number="filterBy.min" /><i>$</i>
            </el-form-item>
            <el-form-item class=" inputt max">
                MAX. <input placeholder="Any" v-model.number="filterBy.max" /><i>$</i>
            </el-form-item>
            </div>
            <hr>
            <el-form-item class="">
                <el-button class="clearbtn">Clear All</el-button>
                <el-button class="apllybtn" @click="onClickButton">Apply</el-button>
            </el-form-item>
        </el-form>
    </el-popover>

    <el-button class="budgetbtn " ref="buttonRef2" v-click-outside="onClickOutside2">Delivery Time <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg></el-button>
    <el-popover ref="popoverRef2" :virtual-ref="buttonRef2" width='279px' trigger="click" virtual-triggering>
        <el-form>
            <el-form-item>
                <el-radio-group v-model="radio">
                    <el-radio label="Express 24H" />
                    <el-radio label="Up to 3 days" />
                    <el-radio label="Up to 7 days" />
                    <el-radio label="Anytime" />
                </el-radio-group>
            </el-form-item>
            <hr>
            <el-form-item class="flex">
                <el-button class="clearbtn cb2">Clear All</el-button>
                <el-button class="apllybtn ab2" @click="onClickButton">Apply</el-button>
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