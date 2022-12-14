import { Configuration, OpenAIApi } from 'openai'

export default defineEventHandler(async (event) => {
  
  const configuration = new Configuration({
    apiKey: useRuntimeConfig().openaiApiKey
  });
  
  const openai = new OpenAIApi(configuration);

   const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is a cool unique name for a rock climbing route"
  })
  return response.data;
})