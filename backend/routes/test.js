const { Ollama } = require("ollama");

const ollama = new Ollama({
    host: "http://127.0.0.1:11434"
});

async function test() {
    const response = await ollama.chat({
        model: "llama3",
        messages: [
            {
                role: "user",
                content: "Say Hello"
            }
        ]
    });

    console.log(response.message.content);
}

test();