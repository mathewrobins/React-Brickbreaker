import {useRef, useEffect} from 'react';
import './Canvas.css'


function Canvas(){
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
    
        const ctx = canvas.getContext('2d')

        

        const rectX = canvas.width - 40; // Start 40 pixels from the right edge
        const rectY = 0; // Top edge
    
        // Draw the rectangle
        ctx.fillStyle = 'blue'; // Set fill color (optional)
        ctx.fillRect(rectX, rectY, 40, 30);
           
    }, [])

    return (
        <>
            <canvas ref = {canvasRef} id="canvas" width="500" height="300"></canvas>
        </>
    )
}

export default Canvas