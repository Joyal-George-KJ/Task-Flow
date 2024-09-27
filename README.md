Icons In use:

- <i class="bi bi-trash3-fill"></i>
- <i class="bi bi-x-circle"></i>
- <i class="bi bi-check-circle"></i>
- <i class="bi bi-pencil-square"></i>

Data Arragement:

<Storage-Name> : {[
    <Project-Name>: {
        <title>,
        <tasks>: [{
            <Task-Description>: String,
            <Tags>: ['', '',  '']
            <Status>: null // default null | null -> pending, true -> done, false -> failed 
        },
        {
            <Task-Description>: String,
            <Tags>: ['', '',  '']
            <Status>: null // default null | null -> pending, true -> done, false -> failed 
        },
        {
            <Task-Description>: String,
            <Tags>: ['', '',  '']
            <Status>: null // default null | null -> pending, true -> done, false -> failed 
        },
        {...}],
        
    }]
}