const complaintModel = require("../model/complaint.model");

const getUserComplaints = async (req, res) => {
  try {
    const userId = req.params.id;
    //console.log(userId)
    const complaints = await complaintModel.find({});
    res.status(200).json(complaints);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getComplaints = async (req, res) => {
  try {
    console.log("hello");
    const userId = req.user.userId;
    console.log(userId);
    const complaints = await complaintModel.find({ userId: userId });
  
    res.status(200).json(complaints);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "error" });
  }
};

const addComplaint = async (req, res) => {
  try {
    const complaint=req.body;
    console.log(req.body)
    await complaintModel.create(complaint);
    console.log("hii")
    res.status(200).json({ message: "complaint added to list" });
  } catch (error) {
    console.error(error)
    res.status(300).json({ message: "Failed to add complaint" });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const complaintId = req.params.id;
    const userId = req.user.userId;
    const item = await complaintModel.findOneAndDelete({
      complaintId: complaintId,
      userId: userId,
    });
    console.log(item);
    if (!item) res.status(404).json({ message: "complaint not found" });
    else res.status(200).json(item);
  } catch (error) {
    res.status(300).json({ message: "Failed to delete complaint" });
  }
};

const updateStatusComplaint = async (req, res) => {
  try {
    const nature = req.params.nature;
    const userId = req.params.userid;
    console.log(nature,userId)
    console.log("hiiiii")
    const item = await complaintModel.findOneAndUpdate({
      nature: nature,
      userId: userId,
    },{
        status : "solved"
    });
    console.log(item);
    if (!item) res.status(404).json({ message: "complaint not found" });
    else res.status(200).json(item);
  } catch (error) {
    res.status(300).json({ message: "Failed to delete complaint" });
  }
};

module.exports = {
  getComplaints,
  getUserComplaints,
  addComplaint,
  deleteComplaint,
  updateStatusComplaint,
};
