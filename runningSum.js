function runningSum(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i - 1] ? nums[i] = nums[i - 1] + nums[i] : null
    }
    return nums
}