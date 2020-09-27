const Track = require("../model/TrackModel");

exports.getTrack = async (req, res) => {
  const user = req.user;
  try {
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
  } catch (error) {
    console.error(error);
  }
};

exports.addTrack = async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations)
    return res
      .status(422)
      .send({ error: "Missing Track Name and/or location!" });

  try {
    const track = new Track({ userId: req.user._id, name, locations });
    await track.save();
    res.status(200).send(track);
  } catch (err) {
    console.error(err);
    res.status(422).send({
      error: "Please check your input",
    });
  }
};
