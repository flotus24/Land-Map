const express = require("express")
const app = express()
const path = require("path")

const cors = require("cors")
const pool = require("./db")

const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "..\\client\\public\\GeoTIFF")
  },
  filename: (req, file, cb) => {
    console.log(file)
    const { name } = req.body
    cb(
      null,
      name +
        " " +
        new Date().toISOString().slice(0, 10) +
        " " +
        file.originalname
      // + path.extname(file.originalname)
    )
  },
})
const upload = multer({ storage: storage })

//middleware
app.use(cors())
app.use(express.json())

//Routes

//create for single map
// app.post("/maps", upload.single("file"), async (req, res) => {
//   try {
//     const regex = /(GeoTIFF).*/
//     const { name } = req.body
//     const temp_path = req.file.path
//     const path = temp_path.match(regex)
//     const newMap = await pool.query(
//       "INSERT INTO map (name, path) VALUES($1, $2) RETURNING *",
//       [name, path[0]]
//     )
//     res.json(newMap.rows[0])
//   } catch (err) {
//     console.error(err.message)
//   }
// })

//create for multiple maps
app.post("/maps", upload.array("files", 3), async (req, res) => {
  try {
    const regex = /(GeoTIFF).*/
    const { name } = req.body
    const temp_path = req.files[0].path
    const temp_path2 = req.files[1].path
    const temp_path3 = req.files[2].path
    const path = temp_path.match(regex)
    const path2 = temp_path2.match(regex)
    const path3 = temp_path3.match(regex)
    const newMap = await pool.query(
      "INSERT INTO maps (name, ndvi, lst, vhi) VALUES($1, $2, $3, $4) RETURNING *",
      [name, path[0], path2[0], path3[0]]
    )
    res.json(newMap.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//get all
app.get("/maps", async (req, res) => {
  try {
    const allMaps = await pool.query("SELECT * FROM maps")
    res.json(allMaps.rows)
  } catch (err) {
    console.error(err.message)
  }
})

//get specific
// app.get("/maps/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const map = await pool.query("SELECT * FROM map WHERE map_id = $1", [id])
//     res.json(map.rows[0])
//   } catch (err) {
//     console.error(err.message)
//   }
// })

//update
app.put("/maps/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updateMap = await pool.query(
      "UPDATE maps SET name = $1 WHERE map_id = $2",
      [name, id]
    )
    res.json("Map was updated")
  } catch (err) {
    console.error(err.message)
  }
})

//delete
app.delete("/maps/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleteMap = await pool.query("DELETE FROM maps WHERE map_id = $1", [
      id,
    ])
    // fs.unlink(path, (err) => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }

    //   //file removed
    // })
    res.json("Map was deleted")
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log("server started on port 5000")
})
