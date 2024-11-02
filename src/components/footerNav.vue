<template>
    <div class="footer container-fluid">
        <h3 class="brand">
            plotvista
        </h3>


        <div class="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <div class="newsletter-input">
                <input type="seaech" placeholder="Enter your Email address for Newsletter">
                <button>Sign up</button>
            </div>
        </div>
    </div>
</template>


<script>

export default {

}

</script>


<style scoped>
.footer {
    padding: 20px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    text-transform: uppercase;
    font-weight: bolder;
    margin: 0;
}

.links {
    margin: 0;
    padding: 0;
}

.links li {
    list-style-type: none;
    display: inline-block;
    margin: 0px 15px;
}

.active {
    color: #004E95;
    font-weight: bolder;
}

.newsletter {
    display: flex;
    flex-direction: column;
}
</style>