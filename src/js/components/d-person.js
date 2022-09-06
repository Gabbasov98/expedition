let newField = `
    <fieldset class="person__field">
        <input type="text">
        <button class="person__remove-field" type="button">
            <span></span>
        </button>
    </fieldset>
`

$(".person__add-field").click(function () {
    $(this).parents(".person__field").prepend(newField)

    $(".person__remove-field").click(function () {
        $(this).parent(".person__field").remove()
    })
})

