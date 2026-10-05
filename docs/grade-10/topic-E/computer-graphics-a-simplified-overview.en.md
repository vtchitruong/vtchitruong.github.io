---
icon: octicons/image-24
grade: "lớp 10"
grade_url: "/grade-10/grade-10-index/"

level: "phổ thông"
level_url: "/grade-10/grade-10-index/"

difficulty: "easy"
updated: "05/10/2026"
---

# Overview of computer graphics

!!! abstract "Abstract"

    This lesson covers:

    - The two main types of computer graphics: bitmap and vector
    - Graphics software

## Concepts

In computer science, graphics are divided into two primary formats based on how data is stored and represented: bitmap graphics (1) and vector graphics.
{ .annotate }

1.  Also commonly known as **raster graphics**.

The following table compares bitmap graphics and vector graphics:

| Characteristic | Bitmap graphics | Vector graphics |
| --- | --- | --- |
| Basic structure | Composed of a fixed **grid of pixels**. | Composed of **mathematical objects** such as lines, curves, and polygons. |
| Resolution dependency | Image quality is directly tied to the initial resolution. | Images are automatically recalculated based on the display scale. |
| Scaling behavior | Scaling up or zooming in can cause **pixelation and blurriness**. | Scaling up or down **retains sharpness and clarity**. |
| Editing operations | Edited pixel by pixel. | Modifying paths, shapes, layout, and colors mathematically. |
| Common file formats | `JPEG`, `PNG`, `BMP`, `TIFF`, `GIF`, `WEBP` | `SVG`, `AI` (Adobe Illustrator), `EPS`, `CDR` |
| File size | Typically large; increases with image dimensions and total pixel count. | Typically small; depends on the complexity of the mathematical shapes. |
| Practical applications | Used for objects with intricate details: photographs, digital paintings. | Used for designs requiring high precision: logos, icons, typography, charts, diagrams. |
| Convertibility | Difficult to convert to vector format, often losing detail. | Easily converted to bitmap format without loss of quality. |

??? info "Conversion mechanisms between bitmap and vector"

    <div class="grid cards" markdown>

    -   :material-vector-arrange-below:{ .lg .middle } **Vector to bitmap**
    
        - **Concept:** The process of converting the mathematical formulas of a vector image into a grid of **pixels** for screen display or printing, which is commonly known as rasterization.
        - **Characteristics:** Fast, precise, and automatically handled by computers when exporting files to formats such as PNG and JPEG.

    -   :material-vector-combine:{ .lg .middle } **Bitmap to vector**
        
        - **Concept:** The process of **using algorithms to analyze a pixel grid** to detect and reconstruct mathematical lines and curves, which is commonly known as vectorization or image tracing.
        - **Characteristics:** Complex and inherently approximate. For real-world photographs containing millions of colors, vectorization will either cause a loss of realistic detail or generate an extremely large vector file.

    </div>

---

## Graphics software

!!! note "Graphics software"

    Computer applications that provide tools enabling users to create, edit, process, and publish digital image assets.

Graphics software is widely used in various fields, such as:

- Fine arts and visual design
- Web and application interface design
- Photography
- Film production and advertising

The following table lists and categorizes several popular graphics software applications:

| License type | Bitmap | Vector |
| --- | --- | --- |
| Commercial | - Adobe Photoshop<br>- Adobe Lightroom<br>- Corel PaintShop Pro | - Adobe Illustrator<br>- CorelDRAW<br>- Affinity Designer |
| Open-source or free | - GIMP<br>- Krita<br>- Paint.NET | - Inkscape<br>- Vectr |

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-E/mindmaps/computer-graphics-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đồ họa máy tinh | computer graphics |
| phần mềm đồ họa | graphics editor, graphics software |