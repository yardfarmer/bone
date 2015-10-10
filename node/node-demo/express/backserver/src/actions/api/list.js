/**
 * Created by Andy on 15/3/19.
 */
/**
 * Created by Andy on 15/3/19.
 */


import File from '../../models/file';
var OFFSET = 10;
export default {
  findAll(where, cb){
    var emp_id = where.emp_id;
    var page = (where.page || 0)* OFFSET;
    return File.findAll({
      order: [['ctime', 'DESC']],
      offset: page,
      limit: OFFSET,
      where: {
        emp_id: emp_id
      }
    }).then(function(files){
      cb && cb(files);
    });
  }
}