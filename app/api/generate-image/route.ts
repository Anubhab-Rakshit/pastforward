import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { prompt, era } = await request.json()

    // Create a historically appropriate prompt
    const enhancedPrompt = `A historical image from ${era}: ${prompt}. Highly detailed, realistic, professional quality.`

    // Call Hugging Face API with the user's key
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          inputs: enhancedPrompt,
          options: {
            wait_for_model: true,
          },
        }),
      },
    )

    if (!response.ok) {
      const error = await response.json()
      console.error("Hugging Face API error:", error)
      return NextResponse.json({ error: "Failed to generate image" }, { status: response.status })
    }

    // The response is the image binary
    const imageBuffer = await response.arrayBuffer()

    // Return the image as a response
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    })
  } catch (error) {
    console.error("Error in generate-image API route:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
