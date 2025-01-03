require("dotenv").config();

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

async function main() {
    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8192,
        temperature: 0,
        messages: [{
            role : "user",
            content : "what is 2 + 2"
        }]
      });
      console.log(msg);
}

main();
