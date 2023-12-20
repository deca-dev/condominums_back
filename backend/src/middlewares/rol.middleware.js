const adminValidate = (req, res, next) => {
<<<<<<< HEAD
  const role = req.user.role;
  if (role === 'admin' || role === 'portero') {
    return next();
  } else {
    return res.status(401).json({ message: 'Access Denied!' });
  }
};

module.exports = adminValidate;
=======
    const role = req.user.role;
    if(role === 'admin') {
        return next()
    } else {
        return res.status(401).json({message:'Access Denied!'})
    }
};

module.exports = adminValidate
>>>>>>> origin/main
