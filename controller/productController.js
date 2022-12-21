import Product from '../models/productModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFeatures';
const excludes =
  '-__v -Promo -heel -lenght -material -production -productname -price_novat -code';
export const getAllProducts = catchAsync(
  async (req, res, next) => {
    let filter = { sub_category: 'Sneakers' };
    const { limit } = req.query;

    const features = new APIFeatures(
      Product.find(filter),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const data = await features.query
      .select(excludes)
      .limit(limit || 200);

    if (!data || data.length === 0)
      next(new AppError('No document found', 404));

    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  }
);

export const getOne = catchAsync(async (req, res, next) => {
  let data;

  req.url.includes('model')
    ? (data = await Product.find({
        'model.model_id': req.query.id,
      }).select(excludes))
    : (data = await Product.findById(req.query.id).select(excludes));

  if (!data)
    next(
      new AppError('No document found with that ID', 404)
    );

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});
