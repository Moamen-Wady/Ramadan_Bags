import "./App.css";

function App() {
  return (
    <>
      <div className="h">
        <img src="su.jpg" alt="" />
        <img src="eg.jpg" alt="" />
      </div>
      <div className="main">
        <div className="info">
          <p>
            ملاحظات:
            <br />
            1-عدد الشنط المستهدف هو 300 شنطة
            <br />
            2-محتويات الشنطة:
            <br />
            -4 كيلو ارز
            <br />
            -2 كيس مكرونة
            <br />
            -3 كيلو سكر
            <br />
            -نصف كيلو بلح
            <br />
            -نصف كيلو لوبيا
            <br />
            -نصف كيلو فاصوليا
            <br />
            - زجاجة زيت
            <br />
            - كيلو سمنة
            <br />
            - باكو شاي
            <br />
            - كيس ملح
            <br />
            - برطمان صلصة
            <br />
            3-سيتم تحضير يوم لتعبئة الشنط لذا يرجى ارسال محتويات الشنط و عدد
            مناسب من الاكياس لتعبئتها وذلك في الموعد الذي سيتم تحديده قريبا ان
            شاء الله
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <th>النوع</th>
              <th>اجمالي الكمية والوحدة</th>
              <th>المتاح</th>
              <th>المتبقي</th>
            </tr>
            <tr>
              <td>ارز</td>
              <td>1200 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>مكرونة</td>
              <td>600 كيس</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>سكر</td>
              <td>900 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>بلح</td>
              <td>150 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>لوبيا</td>
              <td>150 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>فاصوليا</td>
              <td>150 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>زيت</td>
              <td>300 زجاجة</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>سمنة</td>
              <td>300 كيلو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>شاي</td>
              <td>300 باكو</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ملح</td>
              <td>300 كيس</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>صلصة</td>
              <td>300 برطمان</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="lnks">
          <img src="su.jpg" alt="" />
          <img src="eg.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
