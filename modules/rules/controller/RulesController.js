import {updateRules} from "@modules/rules/model/RulesModel";
import router from "@modules/role/controller/RoleController";

router.post('/rules/:id', async (req, res) => {
  try {
    const {id} = req.params
    await updateRules(id, req.body)
    res.json()
  } catch ({message}) {
    res.status(400).json({message})
  }
})

export default router;
