<script>
    let { type, name, id, label, placeholder } = $props();
</script>

<div>
    <label for="{type}">{label}</label>

    <input type="{type}" name="{name}" id="{id}" placeholder="{placeholder}" class="flex py-3 rounded-2 px-4 border-2 border-solid border-[#E6E6E6] focus:border-[#FFD322] focus:outline-none">    
</div>


