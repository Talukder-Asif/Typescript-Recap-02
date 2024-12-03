{
    type ToDo = {
        task : string;
        completed : boolean;
        duration : string|number;
    };

    // mapped type
    type OptionalTODo = {
        [keys in keyof ToDo]?: ToDo[keys];
        // it will map the TODO and get the keys and make variable on the same type and also add a undefined type

        // Also we not can add new types in this 
    }

    const CT1 : ToDo = {
        task: "Micro Processor Class Test",
        completed: false,
        duration: "15 minutes"
    }

    const CT2 : OptionalTODo = {
        task: "SAD Class Test"
    }

    console.log(CT1, CT2)
}