import React from "react";
import "./FoodDetail.css";
import dogimage from "../../images/golden.png";
import { Link } from "react-router-dom";

export default function FoodDetail() {
  return (
    <div className="dog-bg-modal">
      <div className="modal-content">
        <div className="food-content-header">
          <div className="food-header-left">
            <img src={dogimage} alt="golden-dog" />
          </div>
          <div className="food-header-right">
            <p className="food-detail-title">
              Seedo Natural Corn Flushable Cat Litter
            </p>
            <p><span className="food-detail-title">Giá:</span> 400.000 VND</p>
            <div>
              <p className="food-detail-title">Kích cỡ:</p>
              <div>
                <button>3L</button>
                <button>7L</button>
              </div>
            </div>
            <div>
              <p className="food-detail-title">Hương vị:</p>
              <div>
                <button>Vani</button>
                <button>Dâu</button>
                <button>Choco</button>
              </div>
            </div>
          </div>
        </div>
        <div className="food-content-body">
          <p className="food-detail-title">Mô tả sản phẩm:</p>
          <p className="food-body-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
            in quam dictum rutrum. Vivamus pellentesque, mi vitae suscipit
            euismod, ante dolor mollis felis, ac suscipit odio lectus quis orci.
            Vestibulum nec nibh nisl. Nunc urna ligula, hendrerit at consequat
            ac, lacinia tempor dui. Aliquam varius augue in velit vulputate,
            vitae placerat dolor fermentum. Aenean leo eros, imperdiet ut quam
            vitae, convallis viverra dui. Aenean libero metus, accumsan ac
            euismod in, efficitur et magna. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Aliquam
            lobortis nisi a massa posuere sodales. Nunc in erat posuere,
            imperdiet tellus eget, placerat eros. Aliquam sit amet tellus vitae
            mi hendrerit volutpat. Etiam sed suscipit lorem. Proin tempor sit
            amet neque ac euismod. Integer vitae egestas lacus. Fusce non
            consequat sapien. Donec vel lacinia orci. Aenean a imperdiet orci.
            Morbi ultrices ipsum sed ligula dignissim pellentesque. Fusce
            volutpat magna nec tristique pulvinar. Fusce non porttitor purus.
            Cras malesuada, leo ac laoreet bibendum, orci metus iaculis mi, eu
            volutpat arcu mi sit amet augue. Proin pellentesque ultrices lacus,
            id molestie mauris vulputate molestie. In tortor leo, tempus eu
            dolor sed, auctor pharetra felis. 
            <br />
            Cras dapibus ultricies diam, et
            posuere nulla auctor non. Donec eu dapibus enim. Donec cursus libero
            a odio pellentesque, vel feugiat ex egestas. Nunc nisl dui, pharetra
            sit amet blandit vitae, dictum id quam. Proin dictum neque ac quam
            viverra, in ultrices est laoreet. Sed ac lacus est. Sed purus
            libero, tincidunt vel sem ultrices, placerat tincidunt odio. Integer
            ornare turpis leo, id ultricies nisi bibendum sit amet. Fusce
            consequat ipsum sit amet pretium pharetra. Vestibulum elementum
            laoreet lectus, sit amet tincidunt dui facilisis sit amet. Duis id
            est auctor, elementum nisi ut, consequat nisi. Cras ullamcorper
            augue ac mauris rutrum, nec porttitor turpis semper.
            <br /> 
            Ut molestie
            turpis a sem rutrum, et rutrum nulla dictum. Etiam vulputate, lectus
            tincidunt efficitur congue, magna ligula tincidunt lectus, vel
            semper justo nisi non urna. Curabitur volutpat eget quam eu
            scelerisque. Suspendisse id venenatis libero, eu bibendum odio.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris
            tristique volutpat nisi sit amet eleifend. Vestibulum placerat
            tortor in purus consequat, sit amet consectetur lectus volutpat.
            Morbi congue risus quis sem lacinia, in pellentesque ex porttitor.
            Fusce tincidunt gravida sollicitudin.
            <br />
            Aenean tempor placerat nisl eu
            ullamcorper. Sed ex mauris, euismod nec ullamcorper ac, posuere in
            quam. Curabitur in mauris ut dolor sodales ullamcorper. Vivamus
            metus metus, finibus sit amet tortor vitae, porttitor maximus
            lectus. Suspendisse lacinia dictum ligula, ac congue nibh eleifend
            tristique. Curabitur mi nisl, lacinia eget mi vitae, auctor blandit
            neque. Ut posuere diam quis rutrum gravida. Proin elit risus,
            pellentesque non interdum sed, maximus ac risus. Mauris id felis
            vitae nunc hendrerit porta sed ut nunc. In urna enim, egestas varius
            euismod eu, euismod sit amet velit. Nulla tincidunt porta dapibus.
            Integer malesuada diam id faucibus ultrices. Nam ornare auctor diam,
            sit amet vulputate turpis imperdiet non. Nunc quis lorem ut lorem
            fermentum semper at sed sapien. Aliquam erat volutpat. Vivamus
            sapien mi, laoreet a ante vitae, venenatis imperdiet tellus. Duis
            placerat nibh et arcu elementum, ut dictum augue hendrerit. Etiam
            sit amet sem varius, bibendum odio bibendum, imperdiet metus. Sed
            nulla arcu, viverra eget massa ut, mattis fringilla nisl.
          </p>
        </div>
        <div className="content-footer">
          <button id="btn-modify">Chỉnh sửa</button>
          <button id="btn-save">Lưu</button>
          <button id="btn-delete">Xóa</button>
          <button id="btn-close">
            <Link to="/foodpage">Thoát</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
