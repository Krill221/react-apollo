class ChangeName2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :dogs, :displayImage
    add_column :dogs, :displayimage, :string, default: ""
  end
end
